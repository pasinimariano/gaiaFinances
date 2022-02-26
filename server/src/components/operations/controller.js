const store = require('./store')
const tokenGenerator = require('../functions/tokenGenerator')

const { getAllOperations, createOperation, updateOperation } = store
const { authenticateToken } = tokenGenerator

const operationsGet = async (userId, token) => {
  const validToken = await authenticateToken(token)

  if (!validToken) return { missing: 'Invalid or missing token' }

  const response = await getAllOperations(userId)

  return response
}

const operationPost = async (data, token) => {
  const validToken = await authenticateToken(token)

  if (!validToken) return { missing: 'Invalid or missing token' }

  const response = await createOperation(data)

  return response
}

const operationPut = async (data, token) => {
  const validToken = await authenticateToken(token)

  if (!validToken) return { missing: 'Invalid or missing token' }

  const response = await updateOperation(data)

  return response
}

module.exports = {
  operationsGet,
  operationPost,
  operationPut
}
