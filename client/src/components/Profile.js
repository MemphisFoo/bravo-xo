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
      <ul>
        <div id="profile-div">
            <li>Username: {currentUser.username} ({currentUser.pronoun})</li>
           <br/> 
           <li>Bio: "{currentUser.bio}"</li>
           <br/> 
           <div id="profile-img">
              <img id="profile-img-div" src={currentUser.profile_photo} alt=""/>
              </div>
            <br/>
            <div>Sexuality: {currentUser.sexuality}</div>
            <br/>
            <div className="flex flex-wrap gap-2">
  <Button gradientDuoTone="purpleToPink">
   Edit
  </Button>
</div>
      </div>
      </ul>
    </div>

  )
}

export default Profile