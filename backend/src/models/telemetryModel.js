import mongoose from 'mongoose'

const TelemetrySchema = new mongoose.Schema({
  temperatura: { type: Number, required: true },
  humedad: { type: Number, required: true },
  rssi: { type: Number, required: true },
  voltaje: { type: Number, required: true, min: 0 },
  timestamp: { type: Date, required: true, default: Date.now },
})

TelemetrySchema.index({ timestamp: -1 })

const Telemetry = mongoose.model('Telemetry', TelemetrySchema)

export default Telemetry
