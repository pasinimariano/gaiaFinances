const Db = require('../../db/index')

const { Users, Operations, Categories } = Db.CONNECTION.models

const getAllOperations = async UserId => {
  return Operations.findAll({ where: { UserId } })
    .then(json => {
      return { message: 'Success', operations: json }
    })
    .catch(error => {
      return { error: error }
    })
}

const createOperation = async data => {
  const { category, description, amount, status, date, userId } = data

  if (!userId) return { missingUser: 'UserId is missing' }

  const findUser = await Users.findByPk(userId)

  if (findUser === null) return { invalidUser: 'User doesnt exist' }

  const findCategory = await Categories.findOne({
    where: { name: category }
  })

  if (findCategory === null) return { invalidCategory: 'Category doesnt exist' }

  const validStatus = Operations.getAttributes().status.values

  if (validStatus.includes(status)) {
    try {
      const newOperation = await Operations.create({
        description,
        amount,
        status,
        date
      })

      await newOperation.setCategory(findCategory)
      await newOperation.setUser(findUser)
      return {
        message: 'Successfully created',
        operation: newOperation
      }
    } catch (error) {
      return { error: error.errors[0].message }
    }
  }
  return {
    invalidStatus: 'Invalid status, Income and Expenditure are allowed'
  }
}

const updateOperation = async newData => {
  const { _id, category, description, amount, status, userId, date } = newData
  const findOperation = await Operations.findByPk(_id)

  if (findOperation === null)
    return { invalid: 'Invalid id, operation doest exist' }

  if (newData.status !== findOperation.status)
    return {
      forbidden:
        'Once the operation has been created its not possible to change its status'
    }

  const findCategory = await Categories.findOne({
    where: { name: category }
  })

  if (findCategory === null) return { invalid: 'Category doesnt exist' }

  try {
    const updateOperation = await Operations.update(
      {
        description,
        amount,
        date,
        status
      },
      {
        where: { _id }
      }
    )
    console.log(updateOperation)

    return { message: 'Successfully updated' }
  } catch (error) {
    return { error: error }
  }
}

const deleteOperation = _id => {
  return Operations.destroy({ where: { _id } })
    .then(() => {
      return { message: 'Success' }
    })
    .catch(error => {
      return { error: error }
    })
}

module.exports = {
  getAllOperations,
  createOperation,
  updateOperation,
  deleteOperation
}
