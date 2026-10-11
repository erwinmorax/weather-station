import express from 'express'

import userController from '../controller/authController.js'
import validateAuth from '../middleware/validateAuth.js'

const routerAuth = express.Router()

routerAuth.post('/register', validateAuth.validateRegister, userController.userRegister)
routerAuth.post('/login', validateAuth.validateLogin, userController.userLogin)

export default routerAuth
