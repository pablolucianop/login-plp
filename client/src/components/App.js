import React, { useState } from 'react'
import './App.css'
import LoginContainer from './LoginContainer'

function App() {
  const [emailValidated, setEmailValidated] = useState(false)
  const [userData, setUserData] = useState({ user: false })

  async function handleSubmitEmail(email) {
    let res = await fetch('http://localhost:9000/validateMail', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        email: email,
      }),
    })
    let b = res.json()
    setEmailValidated(b)
  }

  async function loginUser(email, password) {
    console.log('email, password', email, password)
    let res = await fetch('http://localhost:9000/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        email: email,
        password: password,
      }),
    })
    let b = await res.json()
    welcome(b)
  }

  async function welcome(jwt2) {
    console.log('jwt2', jwt2.body)
    let res = await fetch('http://localhost:9000/welcome', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        email: 'it@drixit.com',
        password: 'some-password',
        token: jwt2,
      }),
    })
    let b = await res.json()
    setUserData(b)
  }

  return (
    <div>
      Drixit some-password
      <LoginContainer
        handleSubmitEmail={handleSubmitEmail}
        loginUser={loginUser}
        emailValidated={emailValidated}
      />
      <button>welcome</button>
      {userData.user !== false && <div>welcome!!!!!! {userData.name}</div>}
    </div>
  )
}

function Welcome(props) {
  return <h1>Hello, {props.name}</h1>
}

export default App
