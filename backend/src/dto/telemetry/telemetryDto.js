const telemertyDto = (body) => ({
  temperature: body.temperature,
  humedity: body.humedity,
  rssi: body.rssi,
  voltage: body.voltage,
  timestamp: body.timestamp,
})

export default telemertyDto
