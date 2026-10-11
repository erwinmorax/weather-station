import validator from '../utils/validators.js'

const validateRegister = (req, res, next) => {
  const { email, username, lastname, password } = req.body

  if (!email || !username || !lastname || !password) {
    return res.status(400).json({
      ok: false,
      message: 'Datos incompletos, favor de completar.',
    })
  }

  if (!validator.isValidEmail(email)) {
    return res.status(400).json({
      ok: false,
      msg: 'El correo electrónico no es válido.',
    })
  }

  if (!validator.isValidPassword(password)) {
    return res.status(400).json({
      ok: false,
      msg: 'El correo electrónico no es válido.',
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

  if (!validator.isValidEmail(email)) {
    return res.status(400).json({
      ok: false,
      msg: 'El correo electrónico no es válido.',
    })
  }

  if (!validator.isValidPassword(password)) {
    return res.status(400).json({
      ok: false,
      msg: 'El correo electrónico no es válido.',
    })
  }

  next()
}

const validateAuth = { validateRegister, validateLogin }

export default validateAuth
