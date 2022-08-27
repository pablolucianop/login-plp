var express = require('express')
var router = express.Router()
const User = require('../devMockup/users')

router.post('/', async function (req, res, next) {
  try {
    // Get user input
    const { email } = req.body
    // Validate user input
    if (!email) {
      res.status(400).send('All input is required')
    }
    // Validate if user exist in our database
    //mongo
    // const user = await User.findOne({ email })
    const user = User.filter((obj) => obj.email === email)[0]
    if (user) {
      // user
      res.status(200).send(true)
      // res.json('user.token', user.token)
    } else {
      // res.status(400).send('Invalid Credentials')
      res.status(400).send(false)
    }
  } catch (err) {
    console.log(err)
  }
})

module.exports = router
