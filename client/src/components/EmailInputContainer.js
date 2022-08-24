import React, { useState } from 'react'
import NextLoginBtn from './NextLoginBtn'
import './EmailInputContainer.css'
function EmailInputContainer(props) {
  const [email, setEmail] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()
    props.clickHandler(email)
  }
  return (
    <form onSubmit={handleSubmit}>
      <label>Email Address </label>
      <div className="input-container">
        <input
          type="text"
          onChange={(e) => setEmail(e.target.value)}
          name="firstName"
          required
        />
        {true && <p>✔️</p>}
        {/* {renderErrorMessage('uname')} */}
      </div>
      {/* <div className="input-container"> */}
      {/* <label>Password </label> */}
      {/* <input type="password" name="pass" required /> */}
      {/* {renderErrorMessage('pass')} */}
      {/* </div> */}
      <NextLoginBtn type="submit" onClick={handleSubmit} />
    </form>
  )
}
export default EmailInputContainer
