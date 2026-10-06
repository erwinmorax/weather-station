const registerDto = (body) => ({
  email: body.email,
  username: body.username,
  lastname: body.lastname,
  password: body.password,
})

export default registerDto
