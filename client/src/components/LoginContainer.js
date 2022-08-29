import React, { useState } from 'react'
import EmailInputContainer from './EmailInputContainer'
import SignUp from './SignUp'
import './LoginContainer.css'
function LoginContainer(props) {
  const [emailValidated, setEmailValidated] = useState(false)

  async function handleSubmitEmail(email) {
    let res = await fetch('http://localhost:9000/v0/validateMail', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        email: email,
      }),
    })
    let resJson = await res.json()
    console.log('resJson', resJson)
    setEmailValidated(resJson)
  }

  async function authenticateUser(email, password) {
    console.log('email, password', email, password)
    let res = await fetch('http://localhost:9000/v0/authenticate', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        email: email,
        password: password,
      }),
    })
    let resJson = await res.json()
    welcome(resJson)
  }

  async function welcome(jwt) {
    let res = await fetch('http://localhost:9000/v0/users/me', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        email: 'it@drixit.com',
        password: 'some-password',
        token: jwt,
      }),
    })
    let resJson = await res.json()
    props.setUserData({ logedIn: true, user: resJson })
  }

  return (
    <div className="form">
      Log in to your account
      <EmailInputContainer
        handleSubmitEmail={handleSubmitEmail}
        authenticateUser={authenticateUser}
        emailValidated={emailValidated}
      />
      <SignUp />
    </div>
  )
}
export default LoginContainer
