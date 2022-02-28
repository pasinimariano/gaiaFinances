const express = require('express')

const controller = require('./controller')

const router = express.Router()

const { searchCategory } = controller

router.get('/', async (req, res) => {
  const { _id } = req.query

  const response = await searchCategory(_id)

  res.json(response)
})

module.exports = router
