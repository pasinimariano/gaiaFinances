const { DataTypes } = require("sequelize");

const CategoriesModel = (sequelize) => {
  return sequelize.define("Categories", {
    name: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
    },
  });
};

module.exports = CategoriesModel;
