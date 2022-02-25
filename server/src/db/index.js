require('dotenv').config()
const { Sequelize } = require('sequelize')

const modelsDefiners = require('./config/modelDefiners')
const modelsAssociations = require('./config/modelsAssociations')

const { DB_USER, DB_PASSWORD, DB_NAME, DB_HOST, DB_PORT } = process.env

const DB_CONNECTION = new Sequelize(
  `postgres://${DB_USER}:${DB_PASSWORD}@${DB_HOST}:${DB_PORT}/${DB_NAME}`,
  {
    logging: false,
    native: false
  }
)

modelsDefiners(DB_CONNECTION)

modelsAssociations(DB_CONNECTION)

module.exports = {
  ...DB_CONNECTION.models,
  CONNECTION: DB_CONNECTION
}
