import React, { useState, useEffect } from 'react'
import './App.css'
import LoginContainer from './LoginContainer'

function App() {
  const [state, setState] = useState({ apiResponse: '' })
  const [apiRes, setApiRes] = useState({ apiResponse: '' })
  const [validMail, setValidMail] = useState(false)
  const [emailValidated, setEmailValidated] = useState(false)
  const [submitedMail, setSubmitedMail] = useState(false)

  async function handleSubmitEmail(email) {
    // setSubmitedMail(state)
    return fetch('http://localhost:9000/validateMail', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        email: email,
      }),
    })
      .then((data) => data.json())
      .then((data) => setEmailValidated(data))
      .then((data) => console.log('emailValidated.apiResponse', emailValidated))
  }

  function callAPI() {
    fetch('http://localhost:9000/testAPI')
      .then((res) => res.text())
      .then((res) => setState({ apiResponse: res }))
  }

  async function loginUser(email, password) {
    console.log('email, password', email, password)
    return fetch('http://localhost:9000/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        email: email,
        password: password,
      }),
    })
      .then((data) => data.json())
      .then((data) => setState({ apiResponse: data }))
      .then((data) => console.log('state', state))
  }

  return (
    <div>
      Drixit some-password
      <LoginContainer
        handleSubmitEmail={handleSubmitEmail}
        loginUser={loginUser}
        emailValidated={emailValidated}
      />
    </div>
  )
}

export default App
