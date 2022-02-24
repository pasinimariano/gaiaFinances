const fs = require("fs");
const path = require("path");

const basename = path.basename(__filename);

const modelDefiners = [];

fs.readdirSync(path.join(__dirname, "../models"))
  .filter(
    (filePath) =>
      filePath.indexOf(".") !== 0 &&
      filePath !== basename &&
      filePath.slice(-3) === ".js"
  )
  .forEach((file) =>
    modelDefiners.push(require(path.join(__dirname, "../models", file)))
  );

const sequelize_instaces = (dbConnection) => {
  return modelDefiners.forEach((model) => model(dbConnection));
};

module.exports = sequelize_instaces;
