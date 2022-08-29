import React, { useState } from 'react'
import './App.css'
import LoginContainer from './LoginContainer'

function App() {
  const [userData, setUserData] = useState({ logedIn: false, user: false })
  return (
    <div>
      Drixit some-password
      {userData.logedIn ? (
        <div>welcome!!!!!! {userData.user.name}</div>
      ) : (
        <LoginContainer setUserData={setUserData} />
      )}
    </div>
  )
}

export default App
