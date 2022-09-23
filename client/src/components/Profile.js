import React from 'react'
import "./stylesheets/profile.css"
function Profile({currentUser}) {
  return (
    <div>
      <div id="profile-dev">
            <div>Username: {currentUser.username}</div>
            <div>Bio: "{currentUser.bio}"</div>
            <div id="profile-img">
              <img id="profile-img-div" src={currentUser.profile_photo} alt=""/>
              </div>
            <div>Sexuality: {currentUser.user_sexuality_id}</div>
      </div>
    </div>

  )
}

export default Profile