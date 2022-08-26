import React, { useState, useEffect } from 'react'
import EmailInputContainer from './EmailInputContainer'
import SignUp from './SignUp'
import './LoginContainer.css'
function LoginContainer(props) {
  return (
    <div className="form">
      Log in to your account
      <EmailInputContainer
        handleSubmitEmail={props.handleSubmitEmail}
        loginUser={props.loginUser}
        emailValidated={props.emailValidated}
      />
      <SignUp />
    </div>
  )
}
export default LoginContainer
