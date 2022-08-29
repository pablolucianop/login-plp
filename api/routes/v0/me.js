var express = require('express')
var router = express.Router()
const bcrypt = require('bcrypt')
const User = require('../../devMockup/users')
const jwt = require('jsonwebtoken')
require('dotenv').config()

const config = process.env

router.post('/', async function (req, res, next) {
  const { email, password, token } = req.body
  if (!token) {
    return res.status(403).send('A token is required for authentication')
  }
  try {
    const decoded = jwt.verify(token, config.TOKEN_KEY)
    console.log('decoded', decoded)
    let email = decoded.email
    const user = User.filter((obj) => obj.email === email)[0]
    console.log('user', user)
    res.status(200).json(user)
  } catch (err) {
    console.log('err', err)
    return res.status(401).send('Invalid Token')
  }
})

module.exports = router