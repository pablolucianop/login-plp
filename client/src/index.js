import React, { useState } from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import Login from './components/Login'
import reportWebVitals from './reportWebVitals'
import { BrowserRouter, Routes, Route, Switch } from 'react-router-dom'
import UserInfo from './components/userInfo'

const root = ReactDOM.createRoot(document.getElementById('root'))

function Application(props) {
  const [state, setState] = useState('primero')
  return (
    <BrowserRouter>
      Hola whats haninn {state}
      <Routes>
        <Route path="/" element={<Login setState={setState} />} />
        <Route path="userInfo" element={<UserInfo user={state} />} />
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
