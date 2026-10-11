import UserModel from '../models/userModel.js'

import hashPass from '../utils/hashPass.js'
import validator from '../utils/validators.js'

const userRegisterService = async (registerUser) => {
  const { email, username, lastname, password } = registerUser

  validator.isValidEmail(email)
  validator.isValidPassword(password)

  const password_hash = await hashPass(password)

  const user = new UserModel({
    email,
    username,
    lastname,
    password: password_hash.hashpass,
  })

  await user.save()
}

export default userRegisterService
