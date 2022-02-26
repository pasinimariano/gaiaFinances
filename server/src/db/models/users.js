const { DataTypes } = require('sequelize')

const UsersModel = sequelize => {
  return sequelize.define(
    'Users',
    {
      _id: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        primaryKey: true
      },
      email: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true
      },
      password: {
        type: DataTypes.STRING,
        allowNull: false
      },
      firstName: {
        type: DataTypes.STRING(20)
      },
      lastName: {
        type: DataTypes.STRING(20)
      }
    },
    {
      timestamps: false
    }
  )
}

module.exports = UsersModel
