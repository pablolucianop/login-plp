import React, { useState, useEffect } from 'react'
import NextLoginBtn from './NextLoginBtn'
import './EmailInputContainer.css'
function EmailInputContainer(props) {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const handleSubmit = (e) => {
    e.preventDefault()
    props.handleSubmitEmail(email)
  }
  const handleSubmitPassword = (e) => {
    e.preventDefault()
    props.handleSubmitPassword(email)
  }

  return (
    <form onSubmit={handleSubmit}>
      <label>Email Address </label>
      <div className="input-container">
        <input
          type="text"
          onChange={(e) => setEmail(e.target.value)}
          name="email"
          required
        />

        {<p>✔️</p>}
        {/* {renderErrorMessage('uname')} */}
      </div>
      {props.emailValidated && (
        <div>
          <label>password</label>
          <div className="input-container">
            <input
              type="text"
              onChange={(e) => setPassword(e.target.value)}
              name="password"
              required
            />
            {/* {renderErrorMessage('uname')} */}
          </div>
        </div>
      )}
      {/* <div className="input-container"> */}
      {/* <label>Password </label> */}
      {/* <input type="password" name="pass" required /> */}
      {/* {renderErrorMessage('pass')} */}
      {/* </div> */}

      <NextLoginBtn type="submit" />
      <NextLoginBtn type="button" onClick={handleSubmitPassword} />
    </form>
  )
}
export default EmailInputContainer
