const Db = require('../../db/index')

const { Users } = Db.CONNECTION.models

const createUser = (email, password, firstname, lastname) => {
  return Users.create({ email, password, firstname, lastname })
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

const updateUser = newData => {
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

const deleteUser = user => {
  return Users.destroy({ where: { _id: user._id } })
    .then(() => {
      return { message: 'Success' }
    })
    .catch(error => {
      return { error: error }
    })
}

module.exports = {
  createUser,
  searchUserByEmail,
  updateUser,
  deleteUser
}
