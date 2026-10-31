const validateTelemetry = (req, res, next) => {
  const { temperature, humedity, rssi, voltage } = req.body

  if (!temperature || !humedity || !rssi || !voltage) {
    return res.status(400).json({
      ok: false,
      message: 'Datos del sensor estan incompletos',
    })
  }

  next()
}

export default validateTelemetry
