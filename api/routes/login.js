var express = require('express')
var router = express.Router()
const bcrypt = require('bcrypt')
const User = require('../devMockup/users')
const jwt = require('jsonwebtoken')
require('dotenv').config()

router.post('/', async function (req, res, next) {
  try {
    // Get user input
    const { email, password } = req.body
    // Validate user input
    if (!(email && password)) {
      res.status(400).send('All input is required')
    }
    // Validate if user exist in our database
    //mongo
    // const user = await User.findOne({ email })
    const user = User.filter((obj) => obj.email === email)[0]
    if (user && (await bcrypt.compare(password, user.password))) {
      console.log('user.token', user.token)
      // Create token
      const token = jwt.sign(
        { user_id: user._id, email },
        process.env.TOKEN_KEY,
        {
          expiresIn: '2h',
        }
      )
      // save user token
      user.token = token
      // user
      res.status(200).json(user)
      // res.json('user.token', user.token)
    }

    res.status(400).send('Invalid Credentials')
  } catch (err) {
    console.log(err)
  }
})

module.exports = router
