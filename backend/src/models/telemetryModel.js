import mongoose from 'mongoose'

const TelemetrySchema = new mongoose.Schema({
  temperatura: { type: Number, required: true },
  humedad: { type: Number, required: true },
  rssi: {
    type: Number,
    required: true,
  },
  voltaje: {
    type: Number,
    required: true,
    min: 0, // El voltaje no debería ser negativo
  },
  timestamp: {
    type: Date,
    required: true,
    default: Date.now, // Es mejor usar Date para ordenar y filtrar por rangos de fecha eficientemente
  },
})

const Telemetry = mongoose.model('Telemetryl', TelemetrySchema)

export default Telemetry
