import React, { useState } from 'react'
import './App.css'
import LoginContainer from './LoginContainer'
// import LoginContainer2 from './LoginContainer2'
import { Link } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'

function Login(props) {
  let navigate = useNavigate()
  const [userData, setUserData] = useState({ logedIn: false, user: false })

  function handleButton(params) {
    props.setState('funca')
    navigate('/userInfo')
  }

  return (
    <div>
      <button onClick={handleButton}>X</button>
      {userData.logedIn ? (
        <Link to="/welcome" ee={'ee'}></Link>
      ) : (
        <LoginContainer
          setUserData={setUserData}
          userData={userData}
          setState={props.setState}
        />
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
export default Login
