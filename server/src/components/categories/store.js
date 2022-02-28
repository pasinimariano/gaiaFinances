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
  return await Categories.create({ name })
    .then(() => {
      return { message: `Category ${name} created` }
    })
    .catch(error => {
      return { error: error }
    })
}

const CategoryDelete = async name => {
  return await Categories.destroy({ where: name })
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
  CategoryDelete
}
