const UserComponent = require('./components/user/network')
const OperationsComponent = require('./components/operations/network')

const routes = server => {
  server.use('/user', UserComponent)
  server.use('/operation', OperationsComponent)
}

module.exports = routes
