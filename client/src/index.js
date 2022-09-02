import React, { useState } from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import Login from './components/Login'
import reportWebVitals from './reportWebVitals'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import UserInfo from './components/UserInfo'

const root = ReactDOM.createRoot(document.getElementById('root'))

function Application(props) {
  const [userData, setUserData] = useState({
    user: false,
    loggedIn: false,
    error: null,
  })
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={<Login setUserData={setUserData} userData={userData} />}
        />
        <Route
          path="*"
          element={<Login setUserData={setUserData} userData={userData} />}
        />
        <Route
          path="/login"
          element={<Login setUserData={setUserData} userData={userData} />}
        />
        <Route path="user-info" element={<UserInfo userData={userData} />} />
      </Routes>
    </BrowserRouter>
  )
}

root.render(
  <React.StrictMode>
    <Application />
  </React.StrictMode>
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals()
