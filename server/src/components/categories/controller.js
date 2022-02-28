const store = require('./store')

const { getCategory } = store

const searchCategory = async _id => {
  if (!_id) return { missing: 'Id is missing or invalid' }

  const response = getCategory(_id)

  if (response === null) return { invalid: 'Category doesnt exist' }

  return response
}

module.exports = {
  searchCategory
}
