const errorHandler = (err, req, res, next) => {
  console.error(err)

  res.status(500).json({
    ok: false,
    message: 'Error interno del servidor',
  })

  next()
}

export default errorHandler
