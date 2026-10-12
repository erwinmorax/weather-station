const validateTelemetry = (req, res, next) => {
  const { temperature, humedety, rssi, voltage, timestamp } = req.body

  if (!temperature || !humedety || !rssi || !voltage || !timestamp) {
    return res.status(400).json({
      ok: false,
      message: 'Datos del sensor estan incompletos',
    })
  }

  next()
}

export default validateTelemetry
