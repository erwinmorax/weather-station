import telemetryDto from '../dto/telemetry/telemetryDto.js'
import telemetryService from '../service/telemetryService.js'

const getTelemetry = async (req, res) => {
  const telemetry = await telemetryService.getTelemetry()

  return res.status(200).json({
    ok: true,
    data: telemetry,
  })
}

const saveTelemetry = async (req, res) => {
  const dataTelemetry = telemetryDto(req.body)
  await telemetryService.saveTelemetry(dataTelemetry)

  res.status(200).json({
    message: 'Se registaron los datos del sensor exitosamente.',
  })
  console.log('Se registaron los datos del sensor exitosamente.')
}

const telemetryController = { getTelemetry, saveTelemetry }

export default telemetryController
