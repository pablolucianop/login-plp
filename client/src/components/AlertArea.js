import './AlertArea.css'

function alertArea(props) {
  let expiredTokenAlert = (
    <p className="invalidToken expiredToken">
      Your session has expired. Please relogin.
    </p>
  )

  const invalidCredentialsAlert = (
    <p className="invalidCredentials">
      Please provide a valid email address and password.
    </p>
  )

  const changeEmailBtn = (
    <button className="change" onClick={() => props.setEmailValidated(null)}>
      Change
    </button>
  )

  const invalidEmailAlert = <p className="alert">Invalid email</p>

  return (
    <div className="alertArea">
      {props.userData.error === 'Invalid Token' && expiredTokenAlert}
      {props.userData.error === 'Invalid Credentials' &&
        invalidCredentialsAlert}
      {props.emailValidated === false &&
        props.userData.error !== 'Invalid Credentials' &&
        invalidEmailAlert}
      {props.emailValidated && changeEmailBtn}
    </div>
  )
}
export default alertArea
