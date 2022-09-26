import React from 'react'
import "./stylesheets/profile.css"
function Profile({currentUser}) {
  return (
    <div>
      <div id="profile-div">
            <div>Username: {currentUser.username} ({currentUser.pronoun})</div>
            <div>Bio: "{currentUser.bio}"</div>
            <div id="profile-img">
              <img id="profile-img-div" src={currentUser.profile_photo} alt=""/>
              </div>
            <div>Sexuality: {currentUser.sexuality}</div>
      </div>
    </div>

  )
}

export default Profile