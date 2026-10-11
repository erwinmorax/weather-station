const isValidEmail = (email) => {
  return typeof email === 'string' && /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)
}

const isValidPassword = (password) => {
  return typeof password === 'string' && password.length >= 8
}

const validator = { isValidEmail, isValidPassword }

export default validator
