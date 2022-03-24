const store = require('./store')

const {
  getCategory,
  getAllCategories,
  categoryPost,
  categoryPut,
  categoryDelete
} = store

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

const postCategory = async name => {
  if (!name) return { missing: 'Name is missing or invalid' }

  const response = await categoryPost(name)

  return response
}

const putCategory = async (name, _id) => {
  if (!name) return { missing: 'Name is required' }

  const response = await categoryPut(name, _id)

  return response
}

const deleteCategory = async (_id, name) => {
  if (!name) return { missing: 'Name is required' }
  if (!_id) return { missing: 'Id is required' }

  const response = categoryDelete(_id, name)

  return response
}

module.exports = {
  allCategories,
  searchCategory,
  postCategory,
  putCategory,
  deleteCategory
}
