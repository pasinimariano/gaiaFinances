const validPassword = async (searchUserByEmail, data, checkHashedPassword) => {
  const user = await searchUserByEmail(data)

  if (!user) return { nonexist: 'User doest exist' }

  const checkPassword = await checkHashedPassword(data.password, user.password)

  return checkPassword
}

module.exports = validPassword
