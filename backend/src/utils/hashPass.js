import bcrypt from 'bcrypt'
import dotenv from 'dotenv'

dotenv.config()

const hashPass = async (password) => {
  const salt = parseInt(process.env.SALT_ROUND)
  const hashpass = await bcrypt.hash(password, salt)

  return { msg: 'Contraseña Ecriptada', hashpass }
}

export default hashPass
