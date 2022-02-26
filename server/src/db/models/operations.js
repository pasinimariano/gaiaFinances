const { DataTypes } = require('sequelize')

const OperationsModel = sequelize => {
  return sequelize.define(
    'Operations',
    {
      _id: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        primaryKey: true
      },
      description: {
        type: DataTypes.STRING(152),
        allowNull: false
      },
      amount: {
        type: DataTypes.FLOAT,
        allowNull: false
      },
      date: {
        type: DataTypes.DATE,
        allowNull: false
      },
      status: {
        type: DataTypes.ENUM({
          values: ['Income', 'Expenditure']
        }),
        allowNull: false
      }
    },
    {
      timestamps: false
    }
  )
}

module.exports = OperationsModel
