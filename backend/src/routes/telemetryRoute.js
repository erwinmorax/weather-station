import express from 'express'

import telemetryController from '../controller/telemetryController.js'
import validateTelemetry from '../middleware/validateTelemetry.js'

const routerTelemetry = express.Router()

routerTelemetry.get('/gettelemetry', telemetryController.getTelemetry)
routerTelemetry.post('/savetelemetry', validateTelemetry, telemetryController.saveTelemetry)

export default routerTelemetry
