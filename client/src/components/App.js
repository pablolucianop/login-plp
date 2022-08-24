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
  React.useEffect(() => {
    callAPI()
  }, [])

  return (
    <div>
      Drixit
      <LoginContainer left={'<Contacts />'} right={'<Chat />'} />
      {state.apiResponse}
    </div>
  )
}

export default App
