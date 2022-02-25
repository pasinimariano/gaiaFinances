const express = require('express')

const controller = require('./controller')

const router = express.Router()

const { allOperations, newOperation } = controller

router.get('/all', async (req, res) => {
  const { _id } = req.body

  const response = await allOperations(_id)

  res.json(response)
})

router.post('/create', async (req, res) => {
  const body = req.body

  const response = await newOperation(body)

  res.json(response)
})

module.exports = router
