import React, { useState } from 'react'
import './App.css'
import LoginContainer from './LoginContainer'

function App() {
  const [state, setState] = useState({ apiResponse: '' })

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
        u: 'u1',
        p: 'p1',
      }),
    })
      .then((data) => data.text())
      .then((data) => setState({ apiResponse: data }))
  }

  React.useEffect(() => {
    callAPI()
  }, [])

  return (
    <div>
      Drixit
      <LoginContainer left={'<Contacts />'} right={'<Chat />'} />
      <button onClick={loginUser}></button>
      {state.apiResponse}
    </div>
  )
}

export default App
