const store = require('./store')

const { getCategory, getAllCategories } = store

const allCategories = async () => {
  const response = await getAllCategories()

  return response
}

const searchCategory = async _id => {
  if (!_id) return { missing: 'Id is missing or invalid' }

  const response = await getCategory(_id)

  if (response === null) return { invalid: 'Category doesnt exist' }

  return response
}

module.exports = {
  allCategories,
  searchCategory
}
