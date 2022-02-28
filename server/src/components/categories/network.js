const express = require('express')

const controller = require('./controller')

const router = express.Router()

const { searchCategory, allCategories } = controller

router.get('/all', async (req, res) => {
  const response = await allCategories()

  res.json(response)
})

router.get('/byId', async (req, res) => {
  const { _id } = req.query

  const response = await searchCategory(_id)

  res.json(response)
})

module.exports = router
