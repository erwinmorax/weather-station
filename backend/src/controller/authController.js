import registerDto from '../dto/auth/registerDto.js'
import userRegisterService from '../service/authService.js'

const userRegister = async (req, res) => {
  const registerUser = registerDto(req.body)
  const user = await userRegisterService(registerUser)

  res.status(201).json({
    user,
    message: 'Se registro exitosamente el usuario.',
  })
  console.log('Se registro exitosamente el usuario.')
}

const userLogin = async () => {
  /** 
  try {
    const { email, password } = req.body
    if (!email || !password)
      return res
        .status(400)
        .json({ message: 'Email y contraseña son requeridos' })

    const user = await User.findOne({ email })
    if (!user)
      return res.status(401).json({ message: 'Credenciales incorrectas' })
    // Comparar la contraseña con el hash guardado
    const match = await bcrypt.compare(password, user.password)
    if (!match)
      return res.status(401).json({ message: 'Credenciales incorrectas' })

    // Generar JWT (firma con SECRET)xx
    const token = jwt.sign(
      { sub: user._id, email: user.email },
      process.env.JWT_SECRET,
      { expiresIn: '15m' },
    )

    res.json({
      message: 'Autenticado',
      token,
      user: { id: user._id, email: user.email },
    })
    console.log('Inicio de Sesión Exitoso')
  } catch (err) {
    console.error(err)
    res.status(500).json({ message: 'Error del servidor' })
  }
    */
}

const userController = { userRegister, userLogin }

export default userController
