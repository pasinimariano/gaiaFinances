const { DataTypes } = require('sequelize')

const CategoriesModel = sequelize => {
  return sequelize.define(
    'Categories',
    {
      _id: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        primaryKey: true
      },
      name: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true
      }
    },
    {
      timestamps: false
    }
  )
}

module.exports = CategoriesModel
