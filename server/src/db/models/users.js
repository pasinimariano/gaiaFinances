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
      firstname: {
        type: DataTypes.STRING(20),
        allowNull: false
      },
      lastname: {
        type: DataTypes.STRING(20),
        allowNull: false
      }
    },
    {
      timestamps: false
    }
  )
}

module.exports = UsersModel
