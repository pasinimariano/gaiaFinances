const express = require('express')

const controller = require('./controller')

const router = express.Router()

const {
  searchCategory,
  allCategories,
  postCategory,
  putCategory,
  deleteCategory
} = controller

router.get('/all', async (req, res) => {
  const response = await allCategories()

  res.json(response)
})

router.post('/create', async (req, res) => {
  const { name } = req.body

  const response = await postCategory(name)

  res.json(response)
})

router.put('/update', async (req, res) => {
  const { name, _id } = req.body
  const { token } = req.query

  const response = await putCategory(name, _id)

  res.json(response)
})

router.get('/byId', async (req, res) => {
  const { _id } = req.query

  const response = await searchCategory(_id)

  res.json(response)
})

router.delete('/delete', async (req, res) => {
  const { _id, name } = req.body

  const response = await deleteCategory(_id, name)

  res.json(response)
})

module.exports = router
