import mongoose from 'mongoose'

const LogsSchema = new mongoose.Schema({
  method: { type: String, require: true },
  route: { type: String, require: true },
  status: { type: Number, require: true },
  responseTime: { type: Number, require: true },
  ipaAdress: { type: String, require: true },
  created_at: { type: Date, default: Date.now },
})

const Logs = mongoose.model('Logs', LogsSchema)

export default Logs
