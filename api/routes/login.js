var express = require('express')
var router = express.Router()
const bcrypt = require('bcrypt')

router.post('/', async function (req, res, next) {
  try {
    const hashedPassword = await bcrypt.hash('some-password', 10)
    res.send(hashedPassword)
  } catch (error) {}
})

module.exports = router
