import { create } from 'zustand'
import { authAPI } from '../services/api'
import Cookies from 'js-cookie'

export const useAuthStore = create((set) => ({
  user: null,
  token: Cookies.get('token') || null,
  isLoading: false,
  error: null,

  setUser: (user) => set({ user }),
  setToken: (token) => {
    if (token) {
      Cookies.set('token', token, { expires: 7 })
    }
    set({ token })
  },

  login: async (email, password) => {
    set({ isLoading: true, error: null })
    try {
      const response = await authAPI.login({ email, password })
      const { token, user } = response.data
      set({ token, user, isLoading: false })
      Cookies.set('token', token, { expires: 7 })
      return true
    } catch (error) {
      set({ error: error.response?.data?.message || 'Login failed', isLoading: false })
      return false
    }
  },

  logout: async () => {
    try {
      await authAPI.logout()
    } catch (error) {
      console.error('Logout error:', error)
    }
    Cookies.remove('token')
    set({ user: null, token: null })
  },

  checkAuth: async () => {
    const token = Cookies.get('token')
    if (!token) {
      set({ user: null, token: null })
      return
    }

    try {
      const response = await authAPI.getCurrentUser()
      set({ user: response.data, token })
    } catch (error) {
      Cookies.remove('token')
      set({ user: null, token: null })
    }
  },

  isAuthenticated: () => !!Cookies.get('token'),
  hasRole: (role) => {
    const state = useAuthStore.getState()
    return state.user?.role === role
  },
}))
