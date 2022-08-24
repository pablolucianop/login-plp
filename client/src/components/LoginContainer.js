import React, { useState } from 'react'
import EmailInputContainer from './EmailInputContainer'
// import NextLoginBtn from './NextLoginBtn'
import SignUp from './SignUp'
import './LoginContainer.css'
function LoginContainer(props) {
  const [inputEmail, setInputEmail] = useState('')
  const [title, setTitle] = useState('x')
  function handleTitleChange(evt) {
    setTitle(evt)
  }

  return (
    <div className="form">
      Log in to your account {title}
      <EmailInputContainer clickHandler={handleTitleChange} />
      <SignUp />
    </div>
  )
}
export default LoginContainer
