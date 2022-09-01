const express = require('express')
const router = express.Router()
const bcrypt = require('bcrypt')
const User = require('../../devMockup/users')
const jwt = require('jsonwebtoken')
require('dotenv').config()

router.post('/', async function (req, res, next) {
  console.log('req', req)
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
    console.log('user', user)

    const unauthorized = {
      error: {
        errors: [
          {
            domain: 'global',
            reason: 'required',
            message: 'Login Required',
            locationType: 'header',
            location: 'Authorization',
          },
        ],
        code: 401,
        message: 'Login Required',
      },
    }

    if (user && (await bcrypt.compare(password, user.password))) {
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
      res.status(200).json(token)
    }
    res.status(401).json(JSON.stringify(unauthorized))

    //
  } catch (err) {
    console.log(err)
  }
})

module.exports = router
