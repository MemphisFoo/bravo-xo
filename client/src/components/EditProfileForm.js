import { Button } from 'flowbite-react';
import React, { useState, useEffect } from "react";
// import { useParams } from 'react-router-dom'
import './stylesheets/edit_profile.css';

function EditProfileForm({currentUser}) {
  const profile = currentUser.profile;
  const [pronouns, setPronouns] = useState ([]);
  const [sexualities, setSexualities] = useState ([]);
  const [shows, setShows] = useState ([])
  const [formData, setFormData] = useState({
      username: profile.username,
      first_name: profile.first_name,
      last_name: profile.last_name,
      profile_photo: profile.profile_photo,
      bio: profile.bio,
      show_id: profile.show.title,
      pronoun_id: profile.pronoun.preference,
      sexuality_id: profile.sexuality.choose,
    });
// console.log(formData)

  // // const handleChange = (e) => {
  // //   setFormData({
  // //     ...formData,
  // //     [e.target.name]: e.target.value,
  // //   });
  // // };

  useEffect(() => {
    fetch("/pronouns")
      .then((r) => r.json())
      .then(data => {
        setPronouns(data)
      })
  }, [])

  useEffect(() => {
    fetch("/sexualities")
      .then((r) => r.json())
      .then(data => {
        setSexualities(data)
      })
  }, [])

  useEffect(() => {
    fetch("/shows")
      .then((r) => r.json())
      .then(data => {
        setShows(data)
      })
  }, [])
  
  const handleChange = (e) => {
      setFormData({
        ...formData,
        [e.target.name]: e.target.value,
      });
    };


    return (<div>
      <form id="edit-profile-div">
      <label id="edit-profile-content-div" htmlFor="first_name">First Name:</label>
      <input
        id="first_name-edit-input"
        type="text"
        name="first_name"
        value={formData.first_name}
        onChange={handleChange}
      />
      <label id="edit-profile-content-div" htmlFor="last_name">Last Name:</label>
      <input
        id="last_name-edit-input"
        type="text"
        name="last_name"
        value={formData.last_name}
        onChange={handleChange}
      />
      <label id="edit-profile-content-div" htmlFor="bio">Bio:</label>
      <input
        id="bio-edit-input"
        type="text"
        name="bio"
        value={formData.bio}
        onChange={handleChange}
      />
      {/* <label id="edit-profile-content-div" htmlFor="sexuality_id">Sexuality:</label>
      <input
        id="sexuality-edit-input"
        type="text"
        name="sexuality"
        value={formData.sexuality}
        onChange={handleChange}
      />
      <label id="edit-profile-content-div" htmlFor="pronoun_id">Pronouns:</label>
      <input
        id="pronoun-edit-input"
        type="text"
        name="pronoun"
        value={formData.pronoun}
        onChange={handleChange}
      />
      <label id="edit-profile-content-div" htmlFor="show_id">Show:</label>
      <input
        id="show-edit-input"
        type="text"
        name="show"
        value={formData.show_id}
        onChange={handleChange}
      /> */}
      <button type="submit">Save Changes</button>
    </form>
    </div>
    )
  }

 export default EditProfileForm