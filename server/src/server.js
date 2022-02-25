const express = require('express')
const cookieParser = require('cookie-parser')
const morgan = require('morgan')

const routes = require('./routes')
const accessControlMiddleware = require('./config/middlewares/accessControl')
const endwareControlMiddleware = require('./config/middlewares/endwareControl')

const server = express()

server.name = 'Server'

server.use(
  express.urlencoded({
    extended: true,
    limit: '50mb'
  })
)
server.use(
  express.json({
    limit: '50mb'
  })
)
server.use(cookieParser())
server.use(morgan('dev'))

accessControlMiddleware(server)
routes(server)
endwareControlMiddleware(server)

module.exports = server
