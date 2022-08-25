import React, { useState, useEffect } from 'react'
import EmailInputContainer from './EmailInputContainer'
import SignUp from './SignUp'
import './LoginContainer.css'
function LoginContainer(props) {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  function handleSubmitEmail(evt, evt2) {
    setEmail(evt)
    setPassword(evt2)
    props.handleSubmitEmail(email, password)
  }
  function name() {
    props.handleSubmitEmail(email, password)
  }
  const handleSubmitPassword = (e) => {
    e.preventDefault()
    setEmail(email)
    props.handleSubmitPassword(email)
  }
  useEffect(() => {
    handleSubmitEmail(email)
  }, [email])

  return (
    <div className="form">
      Log in to your account {email}
      <EmailInputContainer
        handleSubmitEmail={handleSubmitEmail}
        handleSubmitPassword={handleSubmitPassword}
        emailValidated={props.emailValidated}
      />
      <SignUp />
    </div>
  )
}
export default LoginContainer
