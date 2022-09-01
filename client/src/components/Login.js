import React, { useState } from 'react'
import './App.css'
import { useNavigate } from 'react-router-dom'
import EmailInputContainer from './EmailInputContainer'
import './Login.css'

function Login(props) {
  let navigate = useNavigate()
  const [emailValidated, setEmailValidated] = useState(null)

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
    console.log('autenticate!!!')

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
    console.log('res.status', res.status)
    if (res.status !== 200) {
      props.setUserData({
        loggedIn: true,
        user: '',
        error: 'Invalid Credentials',
      })

      return
      // throw new Error(res.status)
    }

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
    console.log('resJson!!!', resJson)
    props.setUserData({ loggedIn: true, user: resJson })
    navigate('/user-info')
  }

  return (
    <div className="form">
      <div className="form-wrapper">
        <h3> Log in to your account</h3>
        <EmailInputContainer
          handleSubmitEmail={handleSubmitEmail}
          authenticateUser={authenticateUser}
          emailValidated={emailValidated}
          setEmailValidated={setEmailValidated}
          userData={props.userData}
        />
      </div>
      <div className="aa">
        <div className="bb"></div>
        {/* <div className="nn"></div> */}
      </div>
    </div>
  )
}

export default Login
