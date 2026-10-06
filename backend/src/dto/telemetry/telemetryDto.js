const telemertyDto = (body) => ({
  temperature: body.temperature,
  humedity: body.humedity,
  voltage: body.voltage,
  timestamps: body.timestamps,
})

export default telemertyDto
