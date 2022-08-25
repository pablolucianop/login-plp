import React, { useState } from 'react'
import './App.css'
import LoginContainer from './LoginContainer'

function App() {
  const [state, setState] = useState({ apiResponse: '' })
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  function handleSubmitEmail(email, password) {
    setEmail(email)
    setPassword(password)
    console.log('email', email)
    console.log('password', password)
  }
  function handleSubmitPassword(email) {
    setEmail(email)
  }

  function callAPI() {
    fetch('http://localhost:9000/testAPI')
      .then((res) => res.text())
      .then((res) => setState({ apiResponse: res }))
  }
  async function handleBtnClick() {
    await fetch('http://localhost:9000/testAPI')
      .then((res) => res.text())
      .then((res) => setState({ apiResponse: res }))
    console.log(state)
  }

  async function loginUser(credentials) {
    return fetch('http://localhost:9000/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        email: email,
        password: 'some-password',
      }),
    })
      .then((data) => data.text())
      .then((data) => setState({ apiResponse: data }))
  }

  let emailValidated = false

  React.useEffect(() => {
    callAPI()
  }, [])

  return (
    <div>
      Drixit {email}
      <LoginContainer
        handleSubmitEmail={handleSubmitEmail}
        handleSubmitPassword={handleSubmitPassword}
        emailValidated={emailValidated}
      />
      <button onClick={loginUser}>X-----</button>
      {console.log('state', state)}
    </div>
  )
}

export default App
