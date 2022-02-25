require('dotenv').config
const jwt = require('jsonwebtoken')

const TOKEN_SECRET_KEY = process.env.TOKEN_SECRET_KEY

const createAccessToken = username => {
  return jwt.sign(username, TOKEN_SECRET_KEY)
}

const authenticateToken = token => {
  if (token === undefined) return false
  return jwt.verify(token, TOKEN_SECRET_KEY)
}

module.exports = {
  createAccessToken,
  authenticateToken
}
