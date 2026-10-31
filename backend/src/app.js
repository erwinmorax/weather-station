import express from 'express'
import morgan from 'morgan'
import cors from 'cors'

import route from './routes/index.js'
import errorHandler from './middleware/errorHandler.js'
import globalLimiter from './middleware/rateLimiter.js'

const app = express()

app.use(morgan('dev'))
app.use(express.json())
app.use(cors())
app.use(globalLimiter)
app.use('/api', route)
app.use(errorHandler)

export default app
