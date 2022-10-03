import { Button } from 'flowbite-react';
import React, { useState, useEffect } from "react";
import { useParams } from 'react-router-dom'
import './stylesheets/edit_profile.css';

function EditProfileForm({ currentUser, pronouns, sexualities, shows }) {
  const [profiles, setProfiles] = useState()
  const profile = currentUser.profile;
  // const [pronouns, setPronouns] = useState([]);
  // const [sexualities, setSexualities] = useState([]);
  // const [shows, setShows] = useState([])
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

  // $ handling changes function to handle changes in form inputs
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };
  // $ function to update the profiles in the PATCH
  function onUpdateProfile(updatedProfile) {
    const updatedProfileArray = profiles.map((profile) => {
      if (profile.id === updatedProfile.id) {
        return updatedProfile;
      } else {
        return profiles;
      }
    });
    setProfiles(updatedProfileArray)
  }

  const { id } = useParams()
  // $ PATCH for updating profile
  function handleProfileUpdate(e) {
    e.preventDefault();
    fetch(`/profiles/${id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(formData)
    })
      .then((r) => r.json())
      .then((updatedProfile) => {
        onUpdateProfile(updatedProfile);
      });
  }
  // console.log(sexualities)
  // console.log(pronouns)
  // console.log(shows)

  const sexualityOptions = sexualities.map((sexuality) => {
    return (
      <option key={sexuality.id} value={sexuality.id}>
        {sexuality.choose}
      </option>
    )
  })

  const pronounOptions = pronouns.map((pronoun) => {
    return (
      <option key={pronoun.id} value={pronoun.id}>
        {pronoun.preference}
      </option>
    )
  })

  const showOptions = shows.map((show) => {
    return (
      <option key={show.id} value={show.id}>
        {show.title}
      </option>
    )
  })

  return (
    <div>
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
        <div>
          <label>
            Sexuality:&nbsp; &nbsp;
          </label>
          <select value={profile.sexuality.id} onChange={handleChange}>
            {sexualityOptions}
          </select>
          <label>
            Pronouns:&nbsp; &nbsp;
          </label>
          <select value={profile.pronoun.id} onChange={handleChange}>
            {pronounOptions}
          </select>
          <label>
            Show:&nbsp; &nbsp;
          </label>
          <select value={profile.show.id} onChange={handleChange}>
            {showOptions}
          </select>
        </div>
        <label id="edit-profile-img" htmlFor="profile_photo">Profile Photo:</label>
        <input
          id="profile_photo-edit-input"
          type="text"
          name="profile_photo"
          value={formData.profile_photo}
          onChange={handleChange}
        />
        <button type="submit">Save Changes</button>
      </form>
    </div>
  )
};

export default EditProfileForm;