const errorHandler = (err, req, res, next) => {
  if (err.code === 11000) {
    return res.status(409).json({
      message: 'El correo electrónico ya está registrado',
    })
  }

  console.error(err)

  res.status(500).json({
    message: 'Error interno del servidor',
  })

  next()
}

export default errorHandler
