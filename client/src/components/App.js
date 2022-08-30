import React, { useState } from 'react'
import './App.css'
import LoginContainer from './LoginContainer'
import LoginContainer2 from './LoginContainer2'
// import { UserInfo } from './userInfo'
import { Link } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'

function App() {
  let navigate = useNavigate()
  const [userData, setUserData] = useState({ logedIn: false, user: false })

  function goToUserInfo() {
    navigate('/userInfo')
  }

  return (
    <div>
      {/* <UserInfo user={userData}></UserInfo> */}
      {userData.logedIn ? (
        <Link to="/welcome" ee={'ee'}></Link>
      ) : (
        <LoginContainer setUserData={setUserData} goToUserInfo={goToUserInfo} />
      )}
    </div>
  )
}
function App2() {
  return (
    <div>
      <h1>Bookkeeper!</h1>
      <nav
        style={{
          borderBottom: 'solid 1px',
          paddingBottom: '1rem',
        }}
      >
        <Link to="/invoices">Invoices</Link> |{' '}
        <Link to="/expenses">Expenses</Link>
      </nav>
    </div>
  )
}
export default App
