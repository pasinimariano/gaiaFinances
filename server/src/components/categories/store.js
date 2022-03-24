const Db = require('../../db/')

const { Categories } = Db.CONNECTION.models

const getAllCategories = async () => {
  return await Categories.findAll().then(json => {
    return { message: 'Success', categories: json }
  })
}

const getCategory = async _id => {
  return await Categories.findOne({ where: { _id: _id } })
    .then(category => {
      return { message: 'Success', category: category.dataValues }
    })
    .catch(error => {
      return { error: error }
    })
}

const categoryPost = async name => {
  const searchCategory = await Categories.findOne({
    where: { name: name.toUpperCase() }
  })
  if (searchCategory === null) {
    return await Categories.create({ name: name.toUpperCase() })
      .then(() => {
        return { message: `Category ${name} created` }
      })
      .catch(error => {
        return { error: error }
      })
  } else {
    return { errorcat: 'Category already exist' }
  }
}

const categoryPut = async (name, _id) => {
  const findCategory = await Categories.findByPk(_id)

  if (findCategory === null) return { invalid: 'Category doest exist' }

  try {
    await Categories.update(
      {
        name
      },
      {
        where: { _id }
      }
    )
    return { message: 'Successfully updated' }
  } catch (error) {
    return { error: error }
  }
}

const categoryDelete = async (_id, name) => {
  return await Categories.destroy({ where: { _id } })
    .then(() => {
      return { message: `Category ${name} deleted` }
    })
    .catch(error => {
      return { error: error }
    })
}

module.exports = {
  getAllCategories,
  getCategory,
  categoryPost,
  categoryPut,
  categoryDelete
}
