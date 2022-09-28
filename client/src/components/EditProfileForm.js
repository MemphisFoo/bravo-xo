import { Button } from 'flowbite-react';
import React, { useState, useEffect } from "react";
import { useParams } from 'react-router-dom'
import './stylesheets/edit_profile.css';

function EditProfileForm({currentUser}) {

  const { id } = useParams()
  const [profile, setProfile] = useState()
  const [formData, setFormData] = useState({
    first_name: "",
    last_name: "",
    profile_photo: "",
    bio: "",
    show: "",
    pronoun: "",
    sexuality: "",
    user: "",
  })
  // const handleChange = (e) => {
  //   setFormData({
  //     ...formData,
  //     [e.target.name]: e.target.value,
  //   });
  // };
  // useEffect(() => {
  //   fetch(`/profiles/${id}`)
  //     .then((r) => r.json())
  //     .then(data => {
  //       setProfile(data)
  //     })
  //   // console.log(formData)
  // }, [])
  // if (profile) {
  //   const newFormData = {
  //     first_name: profile.first_name,
  //     last_name: profile.last_name,
  //     profile_photo: profile.profile_photo,
  //     bio: profile.bio,
  //     show: profile.show.title,
  //     pronoun: profile.pronoun.preference,
  //     sexuality: profile.sexuality.choose,
  //   }
  //   setFormData(newFormData)
  // }

  const handleChange = (e) => {
      setFormData({
        ...formData,
        [e.target.name]: e.target.value,
      });
    };

    // function onUpdateProfile(updatedProfile) {
    //   const updatedProfileArray = .map((user) => {
    //     if (currentUser.id === updatedProfile.id) {
    //       return updatedProfile;
    //     } else {
    //       return currentUser;
    //     }
    //   });
    //   setProfile(updatedProfileArray);
    // }

    function handleProfileUpdate(e){
    e.preventDefault();
    fetch(`/profiles/${id}`, {
    method: "PATCH",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(formData)})
    .then((r) => r.json())
    .then(formData => setProfile(formData));
    }
    console.log(formData)
    return (<div>
      <form id="edit-profile-div" onSubmit={handleProfileUpdate}>
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
      <label id="edit-profile-content-div" htmlFor="sexuality_id">Sexuality:</label>
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
      />
      <button type="submit">Save Changes</button>
    </form>
    </div>
    )
  }

  export default EditProfileForm