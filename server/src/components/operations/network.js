const express = require('express')

const controller = require('./controller')

const router = express.Router()

const { operationsGet, operationPost, operationPut } = controller

router.get('/all', async (req, res) => {
  const { userId, token } = req.query

  const response = await operationsGet(userId, token)

  res.json(response)
})

router.post('/create', async (req, res) => {
  const body = req.body
  const { token } = req.query

  const response = await operationPost(body, token)

  /*
  response.hasOwnProperty('missing')
    ? res.status(401).json(response)
    : response.hasOwnProperty('missingUser')
    ? res.status(400).json(response)
    : response.hasOwnProperty('invalidUser')
    ? res.status(400).json(response)
    : response.hasOwnProperty('invalidCategory')
    ? res.status(400).json(response)
    : response.hasOwnProperty('invalidStatus')
    ? res.status(400).json(response)
    : response.hasOwnProperty('error')
    ? res.status(403).json(response)
    : res.json(response)
  */
  res.json(response)
})

router.put('/update', async (req, res) => {
  const body = req.body
  const { token } = req.query

  const response = await operationPut(body, token)

  res.json(response)
})

module.exports = router
