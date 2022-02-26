const Db = require('../../db/')

const { Categories } = Db.CONNECTION.models

const categoryPost = async name => {
  return await Categories.create({ name })
    .then(() => {
      return { message: `Category ${name} created` }
    })
    .catach(error => {
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
  categoryPost,
  CategoryDelete
}
