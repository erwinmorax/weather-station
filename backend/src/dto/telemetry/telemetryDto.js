const telemertyDto = (body) => ({
  temperature: body.temperature,
  humedity: body.humedity,
  rssi: body.rssi,
  voltage: body.voltage,
})

export default telemertyDto
