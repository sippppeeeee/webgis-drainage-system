import axios from 'axios'
import Cookies from 'js-cookie'

const API_BASE_URL = import.meta.env.VITE_API_URL || 'http://localhost:5000/api'

const apiClient = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    'Content-Type': 'application/json',
  },
})

// Add token to requests
apiClient.interceptors.request.use((config) => {
  const token = Cookies.get('token')
  if (token) {
    config.headers.Authorization = `Bearer ${token}`
  }
  return config
})

// Handle responses
apiClient.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response?.status === 401) {
      Cookies.remove('token')
      window.location.href = '/login'
    }
    return Promise.reject(error)
  }
)

export const drainageAPI = {
  getAll: (params) => apiClient.get('/drainase', { params }),
  getById: (id) => apiClient.get(`/drainase/${id}`),
  create: (data) => apiClient.post('/drainase', data),
  update: (id, data) => apiClient.put(`/drainase/${id}`, data),
  delete: (id) => apiClient.delete(`/drainase/${id}`),
  search: (query) => apiClient.get('/drainase/search', { params: { q: query } }),
  getByYear: (year) => apiClient.get(`/drainase/tahun/${year}`),
  getStats: () => apiClient.get('/drainase/stats'),
}

export const floodingAPI = {
  getAll: (params) => apiClient.get('/genangan', { params }),
  create: (data) => apiClient.post('/genangan', data),
  getHeatmap: () => apiClient.get('/genangan/heatmap'),
}

export const newsAPI = {
  getAll: (params) => apiClient.get('/berita', { params }),
  getById: (id) => apiClient.get(`/berita/${id}`),
  create: (data) => apiClient.post('/berita', data),
  update: (id, data) => apiClient.put(`/berita/${id}`, data),
  delete: (id) => apiClient.delete(`/berita/${id}`),
}

export const yearAPI = {
  getAll: () => apiClient.get('/tahun-data'),
  create: (data) => apiClient.post('/tahun-data', data),
}

export const authAPI = {
  login: (credentials) => apiClient.post('/auth/login', credentials),
  logout: () => apiClient.post('/auth/logout'),
  getCurrentUser: () => apiClient.get('/auth/me'),
}

export const uploadAPI = {
  uploadShapefile: (file) => {
    const formData = new FormData()
    formData.append('file', file)
    return apiClient.post('/upload/shapefile', formData, {
      headers: { 'Content-Type': 'multipart/form-data' },
    })
  },
  uploadPhotos: (files) => {
    const formData = new FormData()
    files.forEach((file) => formData.append('photos', file))
    return apiClient.post('/upload/photos', formData, {
      headers: { 'Content-Type': 'multipart/form-data' },
    })
  },
}

export default apiClient
