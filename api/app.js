// const createError = require('http-errors')
const express = require('express')
const path = require('path')
const cookieParser = require('cookie-parser')
const logger = require('morgan')
const cors = require('cors')
const indexRouter = require('./routes/v0/index')
const usersRouter = require('./routes/v0/users')
// const testAPIRouter = require('./routes/testAPI')
const authenticateRouter = require('./routes/v0/authenticate')
const validateMailRouter = require('./routes/v0/validateMail')
const usersMeRouter = require('./routes/v0/users/me')
const app = express()
const bcrypt = require('bcrypt')
const users = require('./devMockup/users')
// const auth = require('./middleware/auth')

///////////////

require('dotenv').config()
// require('./config/database').connect()
app.use(cors())
app.use(express.json())
// app.use(express.urlencoded({ extended: false }))
// app.use(cookieParser())
// app.use(express.static(path.join(__dirname, 'public')))
app.use('/', indexRouter)
app.use('/users', usersRouter)
app.use('/v0/authenticate', authenticateRouter)
app.use('/v0/validateMail', validateMailRouter)
app.use('/v0/users/me', usersMeRouter)
// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404))
})

//  res.sendFile(path.join(__dirname, '/index.html'))

// error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message
  res.locals.error = req.app.get('env') === 'development' ? err : {}

  // render the error page
  res.status(err.status || 500)
  res.render('error')
})

module.exports = app
