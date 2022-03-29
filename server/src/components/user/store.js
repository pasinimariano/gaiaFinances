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
        _id: json.dataValues._id,
        email: json.dataValues.email,
        password: json.dataValues.password,
        firstname: json.dataValues.firstname,
        lastname: json.dataValues.lastname
      }
      return formatedData
    })
    .catch(error => {
      return { error: error }
    })
}

const updateUser = newData => {
  const { _id, email, firstname, lastname, password } = newData.data

  return Users.update(
    {
      email: email.toLowerCase(),
      firstname,
      lastname,
      password
    },
    { where: { _id: _id } }
  )
    .then(async () => {
      const userUpdated = await searchUserByEmail(newData.data)

      const formatedData = {
        _id: userUpdated._id,
        email: userUpdated.email,
        firstname: userUpdated.firstname,
        lastname: userUpdated.lastname
      }

      return { message: 'Success', formatedData }
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
