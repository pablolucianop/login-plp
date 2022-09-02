import React, { useState } from 'react'
import './App.css'
import { useNavigate } from 'react-router-dom'
import LoginInputAndBtn from './LoginInputAndBtn'
import './Login.css'

function Login(props) {
  const navigate = useNavigate()
  const [emailValidated, setEmailValidated] = useState(null)

  //authentication and authorization functions
  async function handleSubmitEmail(email) {
    const res = await fetch('http://localhost:9000/v0/validateMail', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        email: email,
      }),
    })
    const resJson = await res.json()
    setEmailValidated(resJson)
  }

  async function authenticateUser(email, password) {
    const res = await fetch('http://localhost:9000/v0/authenticate', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        email: email,
        password: password,
      }),
    })
    if (res.status !== 200) {
      props.setUserData({
        loggedIn: true,
        user: '',
        error: 'Invalid Credentials',
      })

      return
      // throw new Error(res.status)
    }

    const resJson = await res.json()
    getUserInfo(resJson)
  }

  async function getUserInfo(jwt) {
    const res = await fetch('http://localhost:9000/v0/users/me', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        token: jwt,
      }),
    })
    if (res.status !== 200) {
      setEmailValidated(null)
      props.setUserData({
        user: false,
        loggedIn: false,
        error: 'Invalid Token',
      })
      navigate('/login')
      return
    }
    const resJson = await res.json()
    props.setUserData({ loggedIn: true, user: resJson })
    navigate('/user-info')
  }

  return (
    <div className="form">
      <div className="form-wrapper">
        <h3> Log in to your account</h3>
        <LoginInputAndBtn
          handleSubmitEmail={handleSubmitEmail}
          authenticateUser={authenticateUser}
          emailValidated={emailValidated}
          setEmailValidated={setEmailValidated}
          userData={props.userData}
        />
      </div>
    </div>
  )
}

export default Login
