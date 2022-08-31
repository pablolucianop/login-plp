import './userInfo.css'
function UserInfo(props) {
  let userData = {
    id: 'it-drixit-1',
    avatar:
      'https://toppng.com/uploads/preview/roger-berry-avatar-placeholder-11562991561rbrfzlng6h.png',
    email: 'it@drixit.com',
    password: '$2b$10$tUG8FfBnrs8weiD53JFv3OlbP2Ty60tAkWVNutGYPQ7Rvu8d/Zx7i',
    name: 'IT',
    surname: 'Drixit',
    age: 25,
    role: 'admin',
  }

  return (
    <div className="userInfoWrapper">
      {props.user}
      <div className="avatarWrapper">
        <div className="avatar" alt={'Avatar'}></div>
      </div>
      <div className="email">{userData.email}</div>
      <h1 className="userName">
        {userData.name} {userData.surname}
      </h1>
      <p>Role:{userData.role}</p>
      <p>Age:{userData.age}</p>
      {console.log('props', props)}
    </div>
  )
}

export default UserInfo
