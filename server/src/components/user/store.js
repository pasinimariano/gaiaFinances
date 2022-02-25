const Db = require('../../db/index')

const { Users } = Db.CONNECTION.models

const create = (email, password) => {
  return Users.create({ email, password })
    .then(() => {
      return { message: 'Success' }
    })
    .catch(error => {
      return { error: error.errors[0].message }
    })
}

const searchUserByEmail = user => {
  return Users.findOne({ where: { email: user.email.toLowerCase() } })
    .then(json => {
      if (json === null) {
        return false
      }

      const formatedData = {
        _id: json._id,
        email: json.email,
        password: json.password,
        firstname: json.firstName,
        lastname: json.lastName,
        created: json.createdAt
      }
      return formatedData
    })
    .catch(error => {
      return { error: error }
    })
}

const update = newData => {
  newData['email'] = newData.email.toLowerCase()
  return Users.update(newData, { where: { _id: newData._id } })
    .then(async () => {
      const userUpdated = await searchUserByEmail(newData)

      return { message: 'Success', userUpdated }
    })
    .catch(error => {
      return { error: error }
    })
}

const _delete = user => {
  return Users.destroy({ where: { _id: user._id } })
    .then(() => {
      return { message: 'Success' }
    })
    .catch(error => {
      return { error: error }
    })
}

module.exports = {
  create,
  searchUserByEmail,
  update,
  _delete
}
