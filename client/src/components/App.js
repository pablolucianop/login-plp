import React, { useState, useEffect } from 'react'
import './App.css'
import LoginContainer from './LoginContainer'

function App() {
  const [state, setState] = useState({ apiResponse: '' })
  const [jwt, setJwt] = useState('')
  const [apiRes, setApiRes] = useState({ apiResponse: '' })
  const [validMail, setValidMail] = useState(false)
  const [emailValidated, setEmailValidated] = useState(false)
  const [submitedMail, setSubmitedMail] = useState(false)
  const [userData, setUserData] = useState({ user: false })

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
      .then((data) => setJwt(data))
      .then((data) => console.log('jwt', jwt))
  }

  async function welcome(email, password) {
    return fetch('http://localhost:9000/welcome', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        email: 'it@drixit.com',
        password: 'some-password',
        token:
          'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6Iml0QGRyaXhpdC5jb20iLCJpYXQiOjE2NjE2OTUwOTgsImV4cCI6MTY2MTcwMjI5OH0.Pxeaed0L-O6_sEfE-t0QM82NupBPX5W8G4lHdE47i_g',
      }),
    })
      .then((data) => data.json())
      .then((data) => setUserData(data))
      .then((data) => console.log('userData', userData))
  }

  // function getData() {
  //   return fetch(`https://jsonplaceholder.typicode.com/`)
  //     .then
  //     // (response) => welcome()
  //     ()
  // }

  // useEffect(() => {
  //   getData().then()
  //   console.log('useEffect ran...')
  // }, [jwt])

  return (
    <div>
      Drixit some-password
      <LoginContainer
        handleSubmitEmail={handleSubmitEmail}
        loginUser={loginUser}
        emailValidated={emailValidated}
      />
      <button onClick={welcome}>welcome</button>
      {userData.user !== false && (
        <div onClick={welcome}>welcome!!!!!! {userData.name}</div>
      )}
    </div>
  )
}

function Welcome(props) {
  return <h1>Hello, {props.name}</h1>
}

export default App
