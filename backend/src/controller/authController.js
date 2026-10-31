import registerDto from '../dto/auth/registerDto.js'
import loginDto from '../dto/auth/loginDto.js'

import authService from '../service/authService.js'

const userRegister = async (req, res) => {
  const registerUser = registerDto(req.body)
  await authService.userRegisterService(registerUser)

  res.status(201).json({
    message: 'Se registro exitosamente el usuario.',
  })
}

const userLogin = async (req, res) => {
  const loginUser = loginDto(req.body)
  await authService.userLoginService(loginUser)

  res.status(200).json({
    message: 'Inicio de sesión exitoso.',
  })
}

const userController = { userRegister, userLogin }

export default userController
