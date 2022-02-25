const store = require('./store')

const { createOperation } = store

const allOperations = () => {}

const newOperation = async data => {
  const response = await createOperation(data)

  return response
}

module.exports = {
  allOperations,
  newOperation
}
