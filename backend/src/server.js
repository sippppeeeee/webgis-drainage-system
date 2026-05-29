import express from 'express'
import cors from 'cors'
import helmet from 'helmet'
import rateLimit from 'express-rate-limit'
import 'express-async-errors'
import dotenv from 'dotenv'

dotenv.config()

// Routes
import authRoutes from './routes/authRoutes.js'
import drainageRoutes from './routes/drainageRoutes.js'
import floodingRoutes from './routes/floodingRoutes.js'
import newsRoutes from './routes/newsRoutes.js'
import uploadRoutes from './routes/uploadRoutes.js'
import yearDataRoutes from './routes/yearDataRoutes.js'

// Middleware
import { errorHandler } from './middleware/errorHandler.js'

const app = express()

// Security Middleware
app.use(helmet())
app.use(cors({
  origin: process.env.CORS_ORIGIN || 'http://localhost:5173',
  credentials: true
}))

// Rate limiting
const limiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 100, // limit each IP to 100 requests per windowMs
})
app.use('/api/', limiter)

// Body parser
app.use(express.json({ limit: '50mb' }))
app.use(express.urlencoded({ limit: '50mb', extended: true }))

// Static files
app.use('/uploads', express.static('uploads'))

// API Routes
app.use('/api/auth', authRoutes)
app.use('/api/drainase', drainageRoutes)
app.use('/api/genangan', floodingRoutes)
app.use('/api/berita', newsRoutes)
app.use('/api/upload', uploadRoutes)
app.use('/api/tahun-data', yearDataRoutes)

// Health check
app.get('/api/health', (req, res) => {
  res.json({ status: 'OK', timestamp: new Date().toISOString() })
})

// 404 handler
app.use((req, res) => {
  res.status(404).json({ error: 'Route not found' })
})

// Error handler
app.use(errorHandler)

const PORT = process.env.PORT || 5000

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`)
})

export default app
