import React, { useState } from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import Login from './components/Login'
import reportWebVitals from './reportWebVitals'
import { HashRouter, Routes, Route } from 'react-router-dom'
import UserInfo from './components/UserInfo'

const root = ReactDOM.createRoot(document.getElementById('root'))

function Application(props) {
  const [userData, setUserData] = useState({
    user: false,
    loggedIn: false,
    error: null,
  })
  return (
    <HashRouter>
      <Routes>
        <Route
          path="/login-plp"
          element={<Login setUserData={setUserData} userData={userData} />}
        />
        <Route
          path="*"
          element={<Login setUserData={setUserData} userData={userData} />}
        />
        <Route
          path="login-plp/login"
          element={<Login setUserData={setUserData} userData={userData} />}
        />
        <Route
          path="login-plp/user-info"
          element={<UserInfo userData={userData} />}
        />
      </Routes>
    </HashRouter>
  )
}

root.render(
  <React.StrictMode>
    <Application />
  </React.StrictMode>
)

reportWebVitals()
