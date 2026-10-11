import bcrypt from 'bcrypt'

import UserModel from '../models/userModel.js'

import hashPass from '../utils/hashPass.js'

const userRegisterService = async (registerUser) => {
  const { email, username, lastname, password } = registerUser

  const password_hash = await hashPass(password)

  const user = new UserModel({
    email,
    username,
    lastname,
    password: password_hash.hashpass,
  })

  await user.save()
}

const userLoginService = async (loginUser) => {
  const { email, password } = loginUser

  const user = await UserModel.findOne({ email })

  if (!user) {
    throw new Error('Credenciales incorrectas')
  }

  const isPasswordValid = await bcrypt.compare(password, user.password)

  if (!isPasswordValid) {
    throw new Error('Credenciales incorrectas')
  }
}

const authService = { userRegisterService, userLoginService }

export default authService
