import { Button } from 'flowbite-react';
import React, { useState, useEffect } from "react";
import { useParams } from 'react-router-dom'
import './stylesheets/edit_profile.css';

function EditProfileForm({ currentUser}) {
  const profile = currentUser.profile;
  const [pronouns, setPronouns] = useState([]);
  const [sexualities, setSexualities] = useState([]);
  const [shows, setShows] = useState([])
  const [formData, setFormData] = useState({
    username: profile.username,
    first_name: profile.first_name,
    last_name: profile.last_name,
    profile_photo: profile.profile_photo,
    bio: profile.bio,
    show_id: parseInt(profile.show.id),
    pronoun_id: profile.pronoun.id,
    sexuality_id: profile.sexuality.id,
  });


  useEffect(() => {
    getSelections()
  }, [])
  
  function getSelections() {
    const urls = ["/pronouns", "/sexualities", "/shows"]
    Promise.all(urls.map((url) => fetch(url)))
      .then((r) => Promise.all(r.map((r) => r.json())))
      .then((data) => {
        setPronouns(data[0])
        setSexualities(data[1])
        setShows(data[2])
      })
  };

  // $ handling changes function to handle changes in form inputs
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: parseInt(e.target.value),
    });
  console.log(formData)
};
  // $ function to update the profiles in the PATCH
  // function onUpdateProfile(updatedProfile) {
  //   const updatedProfileArray = profiles.map((profile) => {
  //     if (profile.id === updatedProfile.id) {
  //       return updatedProfile;
  //     } else {
  //       return profiles;
  //     }
  //   });
  //   setProfiles(updatedProfileArray)
  // }

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
        // onUpdateProfile(updatedProfile);
      console.log(updatedProfile)
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
          <select value={profile.sexuality.id} name="sexuality_id" onChange={handleChange}>
            {sexualityOptions}
          </select>
          <label>
            Pronouns:&nbsp; &nbsp;
          </label>
          <select value={profile.pronoun.id} name="pronoun_id" onChange={handleChange}>
            {pronounOptions}
          </select>
          <label>
            Show:&nbsp; &nbsp;
          </label>
          <select value={profile.show.id} name="show_id" onChange={handleChange}>
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
        <button className="text-white bg-gradient-to-r from-purple-500 to-pink-500 hover:bg-gradient-to-l focus:ring-4 focus:outline-none focus:ring-purple-200 dark:focus:ring-purple-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2" 
        type="submit">Save Changes</button>
      </form>
    </div>
  )
};

export default EditProfileForm;