import { Button } from 'flowbite-react';
import React, { useState, useEffect } from "react";
// import { useParams } from 'react-router-dom'
import './stylesheets/edit_profile.css';

function EditProfileForm({ currentUser }) {
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

  // $Promise.all code
  useEffect(() => {
    getSelections()
  }, []);

  function getSelections() {
    const urls = ["/pronouns", "/sexualities", "/shows"]
    Promise.all(urls.map((url) => fetch(url)))
      .then((r) => Promise.all(r.map((r) => r.json())))
      .then((data) => {
        setPronouns(data[0])
        setSexualities(data[1])
        setShows(data[2])
      })
  }
  console.log(sexualities)
  console.log(pronouns)
  console.log(shows)
  // $ end of Promise.all code

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
        <div>
          <label>
            Sexuality:&nbsp; &nbsp;
          </label>
          <select value={profile.sexuality.id}>
            {sexualityOptions}
          </select>
          <label>
            Pronouns:&nbsp; &nbsp;
          </label>
          <select value={profile.pronoun.id}>
            {pronounOptions}
          </select>
          <label>
            Show:&nbsp; &nbsp;
          </label>
          <select value={profile.show.id}>
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
};

export default EditProfileForm;