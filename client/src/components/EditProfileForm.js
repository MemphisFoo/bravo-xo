import { Button } from 'flowbite-react';
import React, { useState, useEffect } from "react";
import { useParams, useHistory } from 'react-router-dom'
import './stylesheets/edit_profile.css';

function EditProfileForm({ currentUser, shows, pronouns, sexualities }) {
  const [profile, setProfile] = useState(currentUser.profile);
  console.log(profile)
  // const [pronouns, setPronouns] = useState([]);
  // const [sexualities, setSexualities] = useState([]);
  // const [shows, setShows] = useState([])
  let history = useHistory()
// console.log(profile.id)
  const [formData, setFormData] = useState({
    first_name: profile.first_name,
    last_name: profile.last_name,
    profile_photo: profile.profile_photo,
    bio: profile.bio,
    show_id: profile.show.id,
    pronoun_id: profile.pronoun.id,
    sexuality_id: profile.sexuality.id,
    image: null
  });

  const [newFormData, setNewFormData] = useState({
    image: null
  })
  // console.log(formData)

  // useEffect(() => {
  //   getSelections()
  // }, [])

  // function getSelections() {
  //   const urls = ["/pronouns", "/sexualities", "/shows"]
  //   Promise.all(urls.map((url) => fetch(url)))
  //     .then((r) => Promise.all(r.map((r) => r.json())))
  //     .then((data) => {
  //       setPronouns(data[0])
  //       setSexualities(data[1])
  //       setShows(data[2])
  //     })
  // };

  // $ handling changes function to handle changes in form inputs
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
    // console.log(formData)
  };
  // $ hanlding image changes in the profile form
  const handleImage = (e) => {
    setNewFormData({
      ...newFormData,
      [e.target.name]: e.target.files[0],
    });
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

  //$ useParams
  const { id } = useParams()

  // $ PATCH for updating profile
  function handleProfileUpdate(e) {
    e.preventDefault();
    const formDataBody = {
      first_name: formData.first_name,
      last_name: formData.last_name,
      profile_photo: formData.profile_photo,
      bio: formData.bio,
      show_id: parseInt(formData.show_id),
      pronoun_id: parseInt(formData.pronoun_id),
      sexuality_id: parseInt(formData.sexuality_id)
    }
    // console.log(formDataBody)
    fetch(`/profiles/${profile.id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(formData)
    })
      .then((r) => r.json())
      .then((updatedProfile) => {
        // onUpdateProfile(updatedProfile);
        setProfile(updatedProfile);
        history.push(`/profiles/${profile.id}`)
      });
  }

  function handleProfilePicSubmit(e) {
    e.preventDefault();
    const data = new FormData()
    // data.append('first_name', formData.first_name)
    // data.append('last_name', formData.last_name)
    // data.append('profile_photo', formData.profile_photo)
    // data.append('bio', formData.bio)
    // data.append('show_id', formData.show_id)
    // data.append('pronoun_id', formData.pronoun_id)
    // data.append('sexuality_id', formData.sexuality_id)
    data.append('profile_id', profile.id)
    data.append('image', newFormData.image)

    fetch('/profile_photos', {
      method: "POST",
      body: data,
    })
      .then((res) => res.json())
      history.push('/')
  };

  // console.log(profile)
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
          <select value={formData.sexuality_id} name="sexuality_id" onChange={handleChange}>
            {sexualityOptions}
          </select>
          <label>
            Pronouns:&nbsp; &nbsp;
          </label>
          <select value={formData.pronoun_id} name="pronoun_id" onChange={handleChange}>
            {pronounOptions}
          </select>
          <label>
            Show:&nbsp; &nbsp;
          </label>
          <select value={formData.show_id} name="show_id" onChange={handleChange}>
            {showOptions}
          </select>
        </div>
        {/* <label id="edit-profile-img" htmlFor="profile_photo">Profile Photo:</label>
        <input
          id="profile_photo-edit-input"
          type="text"
          name="profile_photo"
          value={formData.profile_photo}
          onChange={handleChange}
        /> */}
        <button className="text-white bg-gradient-to-r from-purple-500 to-pink-500 hover:bg-gradient-to-l focus:ring-4 focus:outline-none focus:ring-purple-200 dark:focus:ring-purple-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2"
          type="submit">Save Changes</button>
      </form>
      <form id="edit-profile-div" onSubmit={handleProfilePicSubmit}>
        <div>
          <label htmlFor="image" className="text-purple-500">Upload Photo:</label>
          <span className="relative px-5 py-2.5 transition-all ease-in duration-75 bg-black bg-opacity-99 dark:bg-gray-900 rounded-md group-hover:bg-opacity-0" >
            <input
              className="relative inline-flex items-center justify-center p-0.5 mb-2 mr-2 overflow-hidden text-sm font-medium text-white rounded-lg group bg-gradient-to-br from-purple-500 to-pink-500 group-hover:from-purple-500 group-hover:to-pink-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-purple-200 dark:focus:ring-purple-800"
              id="image"
              type="file"
              name="image"
              onChange={handleImage}
            />
          </span>
        </div>
        <button type="submit" className="text-white bg-gradient-to-r from-purple-500 to-pink-500 hover:bg-gradient-to-l focus:ring-4 focus:outline-none focus:ring-purple-200 dark:focus:ring-purple-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2">Submit</button>
      </form>
    </div>
  )
};

export default EditProfileForm;