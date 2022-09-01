import './userInfo.css'
function UserInfo(props) {
  let user = props.userData.user
  return (
    <div className="userInfoWrapper">
      <div className="avatarWrapper">
        <div className="avatar" alt={'Avatar'}></div>
      </div>
      <div className="email">{user.email}</div>
      <h1 className="userName">
        {user.name} {user.surname}
      </h1>
      <p>Role:{user.role}</p>
      <p>Age:{user.age}</p>
    </div>
  )
}

export default UserInfo
