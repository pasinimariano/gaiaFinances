const bcrypt = require('bcrypt')

const hashPassword = async password => {
  const salt = await bcrypt.genSalt(12)
  const hash = await bcrypt.hash(password, salt)

  return hash
}

const checkHashedPassword = async (password, hashed) => {
  const check = await bcrypt.compare(password, hashed)

  return check
}

module.exports = {
  hashPassword,
  checkHashedPassword
}
