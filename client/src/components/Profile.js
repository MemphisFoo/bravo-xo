import { Button } from 'flowbite-react'
import React, { useState, useEffect } from 'react'
import "./stylesheets/profile.css"
import { useParams } from 'react-router-dom'
// import EditProfileForm from "./EditProfileForm"
import {useHistory} from 'react-router-dom'

function Profile() {
const history = useHistory()
  const [profile, setProfile] = useState({pronoun: {}, sexuality: {}, show:{}})
  // might need to put useEffect in a conditional in case currentUser is nil 
  const { id } = useParams()

  useEffect(() => {
    fetch(`/profiles/${id}`)
      .then((res) => res.json())
      .then(data => setProfile(data))
  }, [])
  // console.log(profile)
  if (!profile) {
    return (<div>loading...</div>
    )
  }

  function handleClick(){
    history.push(`./profiles/${id}/edit`)
  }
  return (
    <div>
      <ul>
        <div id="profile-div">
          <li>Username: {profile.username} ({profile.pronoun.preference})</li>
          <br />
          <li>Bio: "{profile.bio}"</li>
          <br />
          <div id="profile-img">
            <img id="profile-img-div" src={profile.profile_photo} alt="" />
          </div>
          <br />
          <div>Sexuality: {profile.sexuality.choose}</div>
          <br/>
          <div>Show: {profile.show.title}</div>
          <br />
          <div className="flex flex-wrap gap-2">
            <Button onClick={handleClick} gradientDuoTone="purpleToPink"> 
              Edit
            </Button>
          </div>
        </div>
      </ul>
    </div>

  )
}

export default Profile