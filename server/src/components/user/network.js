const express = require('express')

const controller = require('./controller')

const router = express.Router()

const { userPost, loginUser, userPut, userDelete } = controller

router.post('/create', async (req, res) => {
  const body = req.body

  const response = await userPost(body)

  /*
  response.hasOwnProperty('invalid')
    ? res.status(400).json(response)
    : response.hasOwnProperty('error')
    ? res.status(406).json(response)
    : res.json(response)
  */
  res.json(response)
})

router.get('/login', async (req, res) => {
  const body = req.query

  const response = await loginUser(body)
  /*
  response.hasOwnProperty('nonexist')
    ? res.status(404).json(response)
    : response.hasOwnProperty('invalid')
    ? res.status(400).json(response)
    : response.hasOwnProperty('error')
    ? res.status(406).json(response)
    : res.json(response)
  */
  res.json(response)
})

router.put('/update', async (req, res) => {
  const body = req.body
  const { token } = req.query

  const response = await userPut(body, token)
  /*
  response.hasOwnProperty('missing')
    ? res.status(401).json(response)
    : response.hasOwnProperty('nonexist')
    ? res.status(404).json(response)
    : response.hasOwnProperty('invalid')
    ? res.status(400).json(response)
    : response.hasOwnProperty('error')
    ? res.status(406).json(response)
    : res.json(response)
  */

  res.json(response)
})

router.delete('/delete', async (req, res) => {
  const body = req.body
  const { token } = req.query

  const response = await userDelete(body, token)

  /*
  response.hasOwnProperty('missing')
    ? res.status(401).json(response)
    : response.hasOwnProperty('nonexist')
    ? res.status(404).json(response)
    : response.hasOwnProperty('invalid')
    ? res.status(400).json(response)
    : response.hasOwnProperty('error')
    ? res.status(406).json(response)
    : res.json(response)
  */
  res.json(response)
})

module.exports = router
