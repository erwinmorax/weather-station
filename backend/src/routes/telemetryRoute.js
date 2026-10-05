import express from 'express'

import telemetryController from '../controller/telemetryController.js'

const routerTelemetry = express.Router()

routerTelemetry.post('/guardar-telemetria', telemetryController.guardarDatos)
routerTelemetry.get('/listar-telemetria', telemetryController.obtenerDatos)

export default routerTelemetry