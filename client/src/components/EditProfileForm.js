import React, { useState } from "react";
import {useParams} from 'react-router-dom'

function EditProfileForm ({currentUser}) {
const [profiles, setProfiles] = useState()
const [formData, setFormData] = useState({
  first_name: " ",
last_name: " ",
profile_photo: " ",
bio: " ",
show_id: " ",
pronoun_id: " ",
sexuality_id: " ",
user_id: " ",
});

const handleChange = (e) => {
  setFormData({
    ...formData,
    [e.target.name]: e.target.value,
  });
};

const { id } = useParams()

function onUpdateProfile(updatedProfile) {
  const updatedProfileArray = currentUser.map((user) => {
    if (currentUser.id === updatedProfile.id) {
      return updatedProfile;
    } else {
      return currentUser;
    }
  });
  setProfiles(updatedProfileArray);
}

function handleProfileUpdate(e){
e.preventDefault();
fetch(`/profiles/${id}`, {
method: "PATCH",
headers: {
  "Content-Type": "application/json"
},
body: JSON.stringify(formData)})
.then((r) => r.json())
.then((updatedProfile) => {
  onUpdateProfile(updatedProfile);
});
}
  return (
<form onSubmit={handleProfileUpdate}>
      <label htmlFor="first_name">First Name:</label>
      <input
        id="first_name-edit-input"
        type="text"
        name="first_name"
        value={formData.first_name}
        onChange={handleChange}
      />
      <label htmlFor="last_name">Last Name:</label>
      <input
        id="last_name-edit-input"
        type="text"
        name="last_name"
        value={formData.last_name}
        onChange={handleChange}
      />
      <label htmlFor="bio">Bio:</label>
      <input
        id="bio-edit-input"
        type="text"
        name="bio"
        value={formData.bio}
        onChange={handleChange}
      />
      <label htmlFor="sexuality_id">Sexuality:</label>
      <input
        id="sexuality_id-edit-input"
        type="text"
        name="sexuality_id"
        value={formData.sexuality_id}
        onChange={handleChange}
      />
      <label htmlFor="pronoun_id">Pronouns:</label>
      <input
        id="pronoun_id-edit-input"
        type="text"
        name="pronoun_id"
        value={formData.pronoun_id}
        onChange={handleChange}
      />
      <label htmlFor="show_id">Show:</label>
      <input
        id="show_id-edit-input"
        type="text"
        name="show_id"
        value={formData.show_id}
        onChange={handleChange}
      />
      <button type="submit">Save Changes</button>
    </form>
)
}

export default EditProfileForm