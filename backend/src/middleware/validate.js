const validateRegister = (req, res, next) => {
  const { email, username, lastname, password } = req.body

  if (!email || !username || !lastname || !password) {
    return res.status(400).json({
      ok: false,
      message: 'Datos incompletos, favor de completar.',
    })
  }

  next()
}

const validateLogin = (req, res, next) => {
  const { email, password } = req.body

  if (!email || !password) {
    return res.status(400).json({
      ok: false,
      message: 'Datos incompletos, favor de completar.',
    })
  }

  next()
}

export default { validateRegister, validateLogin }
