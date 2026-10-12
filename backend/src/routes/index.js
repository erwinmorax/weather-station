import express from 'express'

import routerAuth from './authRoute.js'
import routerTelemetry from './telemetryRoute.js'

const route = express.Router()

route.use('/auth', routerAuth)
route.use('/telemetry', routerTelemetry)

export default route
