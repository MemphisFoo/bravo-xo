import { Button} from 'flowbite-react';
import React, { useState, useEffect } from 'react';
import "./stylesheets/profile.css";
import { useParams, Link } from 'react-router-dom';
// import EditProfileForm from "./EditProfileForm"
import {useHistory} from 'react-router-dom';

function Profile() {
const history = useHistory()
  const [profile, setProfile] = useState({pronoun: {}, sexuality: {}, show:{}, user: {}})
  // might need to put useEffect in a conditional in case currentUser is nil 
  const { id } = useParams()

  useEffect(() => {
    fetch(`/profiles/${id}`)
      .then((res) => res.json())
      .then(data => setProfile(data))
  }, [id])
  // console.log(profile)
  if (!profile) {
    return (<div>loading...</div>
    )
  }

  function handleClick(){
    history.push(`/profiles/${id}/edit`)
  }
  return (
    <div>
      <ul>
        <div id="profile-div">
          <li id="profile-content-div">Username: {profile.user.username} ({profile.pronoun.preference})</li>
          <br />
          <li id= "profile-content-div">Bio: "{profile.bio}"</li>
          <br />
          <div id="profile-img">
            <img id="profile-img-div" src={profile.profile_photo} alt="" />
          </div>
          <br />
          <div id="profile-content-div">Sexuality: {profile.sexuality.choose}</div>
          <br/>
          <div id ="profile-content-div">Show: {profile.show.title}</div>
          <br />
          <div className="flex flex-wrap gap-2">
            <Link className="route-link" to="/profiles/:id/edit"> 
              Edit
            </Link>
          </div>
        </div>
      </ul>
    </div>

  )
}

export default Profile