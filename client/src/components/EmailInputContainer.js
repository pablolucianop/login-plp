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
      <label>Email Address </label>
      <div className="input-container">
        <input
          type="text"
          onChange={(e) => setEmail(e.target.value)}
          name="email"
          disabled={props.emailValidated}
          required
        />
        {props.emailValidated && (
          <button
            className="check"
            onClick={() => props.setEmailValidated(false)}
          >
            change
          </button>
        )}
        {props.emailValidated && <p className="check">✔️</p>}
        {/* {renderErrorMessage('uname')} */}
      </div>
      {props.emailValidated && (
        <div>
          <label>password</label>
          <div className="input-container">
            <input
              type="password"
              onChange={(e) => setPassword(e.target.value)}
              name="password"
              required
            />
            {/* {renderErrorMessage('uname')} */}
          </div>
        </div>
      )}
      {props.emailValidated ? (
        <input
          type="submit"
          name="foo"
          value="login"
          className="NextLoginBtn"
        />
      ) : (
        <input type="submit" name="foo" value="next" className="NextLoginBtn" />
      )}
    </form>
  )
}
export default EmailInputContainer
// <form onSubmit={handleSubmit}>
//   <label>Email Address </label>
//   <div className="input-container">
//     <input
//       type="text"
//       onChange={(e) => setEmail(e.target.value)}
//       name="email"
//       disabled={props.emailValidated}
//       required
//     />
//     {props.emailValidated && (
//       <button
//         className="check"
//         onClick={() => props.setEmailValidated(false)}
//       >
//         change
//       </button>
//     )}
//     {props.emailValidated && <p className="check">✔️</p>}
//     {/* {renderErrorMessage('uname')} */}
//   </div>
//   {props.emailValidated && (
//     <div>
//       <label>password</label>
//       <div className="input-container">
//         <input
//           type="password"
//           onChange={(e) => setPassword(e.target.value)}
//           name="password"
//           required
//         />
//         {/* {renderErrorMessage('uname')} */}
//       </div>
//     </div>
//   )}
//   {props.emailValidated ? (
//     <input
//       type="submit"
//       name="foo"
//       value="login"
//       className="NextLoginBtn"
//     />
//   ) : (
//     <input type="submit" name="foo" value="next" className="NextLoginBtn" />
//   )}
// </form>
