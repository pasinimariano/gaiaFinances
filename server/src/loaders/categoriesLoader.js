const Db = require('../db/index')

const { Categories } = Db.CONNECTION.models

const defaultCategories = [
  'Casa',
  'Impuestos',
  'Vehiculo',
  'Seguro',
  'Telefono',
  'Servicios',
  'Salud',
  'Compras',
  'Viajes',
  'Ocio',
  'Otros'
]

const createCategories = async () => {
  const allCategories = await Categories.findAll()

  if (allCategories.length === 0) {
    defaultCategories.forEach(category => {
      return Categories.create({
        name: category
      }).catch(error => {
        return `Error when creating categories : ${error}`
      })
    })
    return 'Successfully created categories'
  }
  return 'Database has categories'
}

module.exports = createCategories
