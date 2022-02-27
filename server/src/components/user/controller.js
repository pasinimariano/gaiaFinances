const checkData = require('../functions/checkData')
const passwordEncrypter = require('../functions/passwordEncrypter')
const tokenGenerator = require('../functions/tokenGenerator')
const validPassword = require('../functions/checkPassword')
const store = require('./store')

const { hashPassword, checkHashedPassword } = passwordEncrypter
const { createAccessToken, authenticateToken } = tokenGenerator
const { createUser, searchUserByEmail, updateUser, deleteUser } = store

const userPost = async data => {
  const check = checkData(data)

  if (
    check.email === 'Ok' &&
    check.password === 'Ok' &&
    check.firstname === 'Ok' &&
    check.lastname === 'Ok'
  ) {
    const email = data.email.toLowerCase()
    const hashedPassword = await hashPassword(data.password)

    const response = await createUser(
      email,
      hashedPassword,
      data.firstname,
      data.lastname
    )

    return response
  }
  return check
}

const loginUser = async data => {
  const check = checkData(data)

  if (check.email === 'Ok' && check.password === 'Ok') {
    const user = await searchUserByEmail(data)

    if (!user) return { nonexist: 'User doest exist' }

    const checkPassword = await checkHashedPassword(
      data.password,
      user.password
    )

    if (checkPassword) {
      const token = createAccessToken(user.email)
      const response = {
        user,
        token
      }
      return response
    }
    return { invalid: 'Invalid password' }
  }
  return { email: check.email, password: check.password }
}

const userPut = async (data, token) => {
  const validToken = authenticateToken(token)

  if (!validToken) return { missing: 'Invalid or missing token' }

  const checkPassword = await validPassword(
    searchUserByEmail,
    data,
    checkHashedPassword
  )

  if (checkPassword) {
    data.hasOwnProperty('newpassword')
      ? (data['password'] = await hashPassword(data.newpassword))
      : (data['password'] = await hashPassword(data.password))
    const response = await updateUser(data)
    return response
  }

  return { invalid: 'Invalid password' }
}

const userDelete = async (user, token) => {
  const validToken = authenticateToken(token)

  if (!validToken) return { missing: 'Invalid or missing token' }

  const checkPassword = await validPassword(
    searchUserByEmail,
    user,
    checkHashedPassword
  )

  if (checkPassword) {
    const response = await deleteUser(user)
    return response
  }
  return { invalid: 'Invalid password' }
}

module.exports = {
  userPost,
  loginUser,
  userPut,
  userDelete
}
