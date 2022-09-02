import React, { useState } from 'react'
import AlertArea from './AlertArea'
import './LoginInputAndBtn.css'

function LoginInputAndBtn(props) {
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
      <AlertArea
        userData={props.userData}
        emailValidated={props.emailValidated}
        setEmailValidated={props.setEmailValidated}
      />
      <input
        type="text"
        onChange={(e) => setEmail(e.target.value)}
        placeholder="Email"
        name="email"
        disabled={props.emailValidated}
        required
      />
      {props.emailValidated && (
        <div>
          <input
            type="password"
            onChange={(e) => setPassword(e.target.value)}
            name="password"
            placeholder="Password"
            required
          />
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
export default LoginInputAndBtn
