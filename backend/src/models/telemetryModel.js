import mongoose from 'mongoose'

const TelemetrySchema = new mongoose.Schema({
  temperature: { type: Number, required: true },
  humedity: { type: Number, required: true },
  rssi: { type: Number, required: true },
  voltage: { type: Number, required: true, min: 0 },
  timestamp: { type: Date, required: true, default: Date.now },
})

TelemetrySchema.index({ timestamp: -1 })

const Telemetry = mongoose.model('Telemetry', TelemetrySchema)

export default Telemetry
