import Telemetry from '../models/telemetryModel.js'

const getTelemetry = async () => {
  const telemetry = await Telemetry.find().sort({ created_at: -1 })

  return telemetry
}

const saveTelemetry = async (dataTelemetry) => {
  const { temperature, humedity, rssi, voltage } = dataTelemetry

  const telemetry = await new Telemetry({
    temperature,
    humedity,
    rssi,
    voltage,
  })

  await telemetry.save()
}

const telemetryService = { getTelemetry, saveTelemetry }

export default telemetryService
