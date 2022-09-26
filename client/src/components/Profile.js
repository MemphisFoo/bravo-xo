import {Button} from 'flowbite-react'
import React, { useState, useEffect } from 'react'
import "./stylesheets/profile.css"
function Profile({currentUser}) {

  const [updateProfile, setUpdateProfile] = useState(null)
  
  useEffect(() => {
    fetch("/profile")
    .then((r) => {

    })
  }
  )
  return (
    <div>
      <div id="profile-div">
            <div>Username: {currentUser.username} ({currentUser.pronoun})</div>
            <div>Bio: "{currentUser.bio}"</div>
            <div id="profile-img">
              <img id="profile-img-div" src={currentUser.profile_photo} alt=""/>
              </div>
            <div>Sexuality: {currentUser.sexuality}</div>
            <div className="flex flex-wrap gap-2">
  <Button gradientDuoTone="purpleToPink">
   Edit profile
  </Button>
</div>
      </div>
    </div>

  )
}

export default Profile