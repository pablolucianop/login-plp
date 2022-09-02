import React, { useEffect } from 'react'
import './UserInfo.css'
import { useNavigate } from 'react-router-dom'
function UserInfo(props) {
  const user = props.userData.user
  const navigate = useNavigate()

  useEffect(() => {
    if (user === false) {
      console.log('esto')
      navigate('/')
    }
  })

  const avatarImgStyle = {
    width: '150px',
    height: '150px',
    backgroundImage: `url(${user.avatar})`,
    backgroundRepeat: 'no-repeat',
    backgroundRosition: 'center',
    backgroundSize: '100% 102.7%',
  }

  return (
    <div className="userInfoWrapper">
      <div className="avatarWrapper">
        <div className="avatar" style={avatarImgStyle} alt={'Avatar'}></div>
      </div>
      <div className="email">{user.email}</div>
      <h1 className="userName">
        {user.name} {user.surname}
      </h1>
      <p>
        Role: <b>{user.role}</b>
      </p>
      <p>
        Age: <b>{user.age}</b>
      </p>
    </div>
  )
}

export default UserInfo
