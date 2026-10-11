import rateLimit from 'express-rate-limit'

const globalLimiter = rateLimit({
  windowMs: 15 * 60 * 1000,
  max: 50,
  message: 'Demasiadas peticiones, intenta de nuevo en 15 minutos.',
  standardHeaders: true,
  legacyHeaders: false,
})

export default globalLimiter
