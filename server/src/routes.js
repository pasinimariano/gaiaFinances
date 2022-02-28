const UserComponent = require('./components/user/network')
const OperationsComponent = require('./components/operations/network')
const CategoriesComponent = require('./components/categories/network')

const routes = server => {
  server.use('/user', UserComponent)
  server.use('/operation', OperationsComponent)
  server.use('/categories', CategoriesComponent)
}

module.exports = routes
