import React, { useState } from 'react'
import './EmailInputContainer.css'
function EmailInputContainer(props) {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const handleSubmit = (e) => {
    e.preventDefault()
    props.emailValidated
      ? props.authenticateUser(email, password)
      : props.handleSubmitEmail(email, password)
  }

  return (
    <form onSubmit={handleSubmit}>
      <div className="alertArea">
        {props.emailValidated === false && (
          <p className="alert">Invalid mail</p>
        )}
        {props.emailValidated && (
          <button
            className="change"
            onClick={() => props.setEmailValidated(null)}
          >
            Change
          </button>
        )}
      </div>
      <input
        type="text"
        onChange={(e) => setEmail(e.target.value)}
        placeholder="Email"
        name="email"
        disabled={props.emailValidated}
        required
      />

      {/* {props.emailValidated &&  <p className="check">✔️</p>} */}
      {/* {renderErrorMessage('uname')} */}

      {props.emailValidated && (
        <div>
          {/* <label>password</label> */}

          <input
            type="password"
            onChange={(e) => setPassword(e.target.value)}
            name="password"
            placeholder="Password"
            required
          />
          {/* {renderErrorMessage('uname')} */}
        </div>
      )}
      {props.emailValidated ? (
        <input
          type="submit"
          name="foo"
          value="login"
          className="NextLoginBtn"
          disabled={password === ''}
        />
      ) : (
        <input type="submit" name="foo" value="next" className="NextLoginBtn" />
      )}
    </form>
  )
}
export default EmailInputContainer
