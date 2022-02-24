const modelsAssociations = (dbConnection) => {
  const Users = dbConnection.models.Users;
  const Operations = dbConnection.models.Operations;
  const Categories = dbConnection.models.Categories;

  Operations.belongsTo(Users);
  Users.hasMany(Operations);

  Operations.belongsTo(Categories);
  Categories.hasMany(Operations);
};

module.exports = modelsAssociations;
