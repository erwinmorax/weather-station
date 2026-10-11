import express from 'express'
import cors from 'cors'

import route from './routes/index.js'
import errorHandler from './middleware/errorHandler.js'
import globalLimiter from './middleware/rateLimiter.js'
import conectarDB from './config/database.js'

const app = express()

conectarDB()

app.use(express.json())
app.use(cors())
app.use(globalLimiter)
app.use('/api', route)
app.use(errorHandler)

export default app
