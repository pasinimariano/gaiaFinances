const { DataTypes } = require("sequelize");

const OperationsModel = (sequelize) => {
  return sequelize.define("Operations", {
    description: {
      type: DataTypes.STRING(152),
      allowNull: false,
    },
    amount: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    date: {
      type: DataTypes.DATE,
      allowNull: false,
    },
    types: {
      type: DataTypes.ENUM({
        values: ["Income", "Expenditure"],
      }),
    },
  });
};

module.exports = OperationsModel;
