import express from 'express'

import telemetryController from '../controller/telemetryController.js'

const routerTelemetry = express.Router()

routerTelemetry.get('/get-telemetry', telemetryController.getTelemetry)
routerTelemetry.post('/save-telemetry', telemetryController.saveTelemetry)

export default routerTelemetry
