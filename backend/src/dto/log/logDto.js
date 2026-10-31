const logsDto = (body) => ({
  method: body.method,
  route: body.route,
  status: body.status,
  responseTime: body.responseTime,
  ipAddress: body.ipAddress,
})

export default logsDto
