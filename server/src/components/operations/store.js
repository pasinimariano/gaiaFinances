const Db = require('../../db/index')

const { Users, Operations, Categories } = Db.CONNECTION.models

const createOperation = async data => {
  const { category, description, amount, status, userId } = data

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
        status
      })
      await newOperation.setCategory(findCategory)
      await newOperation.setUser(findUser)
      console.log(newOperation)
      return { message: 'Successfully created operation' }
    } catch (error) {
      return { error: error.errors[0].message }
    }
  }
  return {
    invalidStatus: 'Invalid status, Income and Expenditure are allowed'
  }
}

module.exports = {
  createOperation
}
