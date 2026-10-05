import express from 'express'

import authController from '../controller/authController.js'

const routerAuth = express.Router()

routerAuth.post('/register', authController.userRegister)
routerAuth.post('/login', authController.userLogin)

export default routerAuth