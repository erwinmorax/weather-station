import mongoose from 'mongoose'

const UserSchema = new mongoose.Schema({
  email: { type: String, required: true, unique: true },
  username: { type: String, required: true },
  lastname: { type: String, required: true },
  password: { type: String, required: true },
  created_at: { type: Date, default: Date.now(), require: true }
})

const UserModel = mongoose.model('UserModel', UserSchema)

export default UserModel
