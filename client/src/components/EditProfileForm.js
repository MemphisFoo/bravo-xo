import { Button } from "flowbite-react";
import React, { useState, useEffect } from "react";
import { useParams, useHistory } from "react-router-dom";
import "./stylesheets/edit_profile.css";

function EditProfileForm({
  onUpdateProfilePicUrl,
  onUpdateProfile,
  profile,
  sexualities,
  pronouns,
  shows,
}) {
  const {
    first_name,
    last_name,
    bio,
    user_id,
    show_id,
    sexuality_id,
    pronoun_id,
  } = profile;

  const [profileData, setProfileData] = useState({});

  const [profilePicData, setProfilePicData] = useState({
    profile_pic: null,
  });

  const history = useHistory();

  useEffect(() => {
    setProfileData({
      first_name: first_name,
      last_name: last_name,
      bio: bio,
      user_id: user_id,
      show_id: show_id,
      sexuality_id: sexuality_id,
      pronoun_id: pronoun_id,
    });
  }, [
    profile,
    first_name,
    last_name,
    user_id,
    show_id,
    sexuality_id,
    pronoun_id,
  ]);

  function handleChange(e) {
    setProfileData({ ...profileData, [e.target.name]: e.target.value });
  }

  function handleImageChange(e) {
    setProfilePicData({
      ...profilePicData,
      [e.target.name]: e.target.files[0],
    });
  }

  function handleSubmit(e) {
    e.preventDefault();

    fetch(`/profiles/${profile.id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(profileData),
    })
      .then((res) => res.json())
      .then((data) => onUpdateProfile(data));
    history.push(`/profiles/${profile.id}`);
  }
  function handleProfilePicSubmit(e) {
    e.preventDefault();
    const pic = new FormData();

    pic.append("profile_pic", profilePicData.profile_pic);
    pic.append("id", profile.id);

    fetch("/update_profile_pic", {
      method: "PATCH",
      body: pic,
    })
      .then((res) => res.json())
      .then((profile) => onUpdateProfilePicUrl(profile.profile_pic_url));
  }

  const sexualityOptions = sexualities.map((sexuality) => {
    return (
      <option key={sexuality.id} value={sexuality.id}>
        {sexuality.choose}
      </option>
    );
  });

  const pronounOptions = pronouns.map((pronoun) => {
    return (
      <option key={pronoun.id} value={pronoun.id}>
        {pronoun.preference}
      </option>
    );
  });

  const showOptions = shows.map((show) => {
    return (
      <option key={show.id} value={show.id}>
        {show.title}
      </option>
    );
  });

  return (
    <div>
      <div className="flex justify-center">
        <div className="p-4 w-half bg-gradient-to-t from-cyan-300 to-purple-900 rounded-lg border border-purple-500 shadow-md sm:p-6 md:p-8 dark:bg-gray-800 dark:border-gray-700">
          <form className="space-y-6" onSubmit={handleSubmit}>
            <label
              className="block mb-2 text-xl font-medium text-cyan-300 dark:text-cyan-300"
              htmlFor="first_name"
            >
              First Name:
            </label>
            <input
              id="first_name-edit-input"
              type="text"
              name="first_name"
              value={profileData.first_name}
              onChange={handleChange}
              className="bg-gray-50 border border-gray-300 text-gray-900 text-l rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
            />
            <label
              className="block mb-2 text-xl font-medium text-cyan-300 dark:text-cyan-300"
              htmlFor="last_name"
            >
              Last Name:
            </label>
            <input
              id="last_name-edit-input"
              type="text"
              name="last_name"
              value={profileData.last_name}
              onChange={handleChange}
              className="bg-gray-50 border border-gray-300 text-gray-900 text-l rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
            />
            <label
              className="block mb-2 text-xl font-large text-cyan-300 dark:text-cyan-300"
              htmlFor="bio"
            >
              Bio:
            </label>
            <input
              id="bio-edit-input"
              type="text"
              name="bio"
              value={profileData.bio}
              onChange={handleChange}
              className="bg-gray-50 border border-gray-300 text-gray-900 text-l rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
            />
            <div>
              <label className="block mb-2 text-xl font-large text-purple-700 dark:text-purple-700">
                Sexuality:&nbsp; &nbsp;
              </label>
              <select
                value={profileData.sexuality_id}
                name="sexuality_id"
                onChange={handleChange}
              >
                {sexualityOptions}
              </select>
              <label className="block mb-2 text-xl font-large text-purple-700 dark:text-purple-700">
                Pronouns:&nbsp; &nbsp;
              </label>
              <select
                value={profileData.pronoun_id}
                name="pronoun_id"
                onChange={handleChange}
              >
                {pronounOptions}
              </select>
              <label className="block mb-2 text-xl font-large text-purple-700 dark:text-purple-500">
                Show:&nbsp; &nbsp;
              </label>
              <select
                value={profileData.show_id}
                name="show_id"
                onChange={handleChange}
              >
                {showOptions}
              </select>
              <button
                className="text-white bg-gradient-to-r from-purple-700 to-fuchsia-500 hover:bg-gradient-to-l focus:ring-4 focus:outline-none focus:ring-purple-200 dark:focus:ring-purple-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2"
                type="submit"
              >
                Save Changes
              </button>
            </div>
          </form>
          <form className="space-y-6" onSubmit={handleProfilePicSubmit}>
            <label
              className="block mb-2 text-xl font-large text-purple-700 dark:text-purple-500"
              htmlFor="image"
            >
              Profile Photo:
            </label>
            <input
              type="file"
              accept="image/*"
              multiple={false}
              name="profile_pic"
              filename={profilePicData.profile_pic}
              onChange={handleImageChange}
            />
            <button
              className="text-white bg-gradient-to-r from-purple-700 to-fuchsia-500 hover:bg-gradient-to-l focus:ring-4 focus:outline-none focus:ring-purple-200 dark:focus:ring-purple-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2"
              type="submit"
            >
              Upload Photo
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default EditProfileForm;
// previous code from an earlier version
// function EditProfileForm({
//   // handleUpdateProfile,
//   imageData,
//   setImageData,
//   handleImgSubmit,
//   currentProfile,
//   shows,
//   pronouns,
//   sexualities,
//   currentUser}) {
//   // const [profile, setProfile] = useState(currentProfile);

//   const [profileData, setProfileData] = useState({});

//   function handleUpdateProfile(profileData) {
//     const newProfObj = { ...currentProfile };
//     (newProfObj.first_name = profileData.first_name)
//     (newProfObj.last_name = profileData.last_name)
//     (newProfObj.bio = profileData.bio)
//     (newProfObj.show_id = profileData.show.id)
//     (newProfObj.pronoun_id = profileData.pronoun.id)
//     (newProfObj.sexuality_id = profileData.sexuality.id)
//     (newProfObj.user_id = profileData.user.id)
//   }
//   useEffect(() => {
//     setProfileData({
//       first_name: newProfObj.first_name,
//       last_name: newProfObj.last_name,
//       email: newProfObj.email,
//       bio: newProfObj.bio,
//       user_id: newProfObj.user_id,
//       sexuality_id: newProfObj.sexuality_id,
//       pronoun_id: newProfObj.pronoun_id,
//       show_id: show_id,
//     });
//   }, []);

//   function handleUpdateProfile(profileData) {
//     const newProfObj = { ...currentProfile };
//     newProfObj.first_name = profileData.first_name;
//     newProfObj.last_name = profileData.last_name;
//     newProfObj.bio = profileData.bio;
//     newProfObj.show_id = profileData.show.id;
//     newProfObj.pronoun_id = profileData.pronoun.id;
//     newProfObj.sexuality_id = profileData.sexuality.id;
//     newProfObj.user_id = profileData.user.id;
//   }

//   // console.log(profile)
//   // const [pronouns, setPronouns] = useState([]);
//   // const [sexualities, setSexualities] = useState([]);
//   // const [shows, setShows] = useState([])
//   let history = useHistory();
//   // const [formData, setFormData] = useState({
//   //   first_name: profile.first_name,
//   //   last_name: profile.last_name,
//   //   bio: profile.bio,
//   //   show_id: profile.show.id,
//   //   pronoun_id: profile.pronoun.id,
//   //   sexuality_id: profile.sexuality.id,
//   //   user_id: profile.user.id,
//   //   image: null
//   // });
//   // console.log(formData)

//   const { id } = useParams();
//   // $ PATCH for updating profile
//   function handleProfileSubmit(e) {
//     e.preventDefault();
//     //   const formDataBody = {
//     //     first_name: formData.first_name,
//     //     last_name: formData.last_name,
//     //     bio: formData.bio,
//     //     // image: formData.image,
//     //     show_id: parseInt(formData.show_id),
//     //     pronoun_id: parseInt(formData.pronoun_id),
//     //     sexuality_id: parseInt(formData.sexuality_id),
//     //     // user_id: parseInt(formData.user_id)
//     //   }

//     // console.log(formDataBody)
//     fetch(`/profiles/${currentUser.id}`, {
//       method: "PATCH",
//       headers: {
//         "Content-Type": "application/json",
//       },
//       body: JSON.stringify(profileData),
//     })
//       .then((r) => r.json())
//       .then((data) => {
//         // onUpdateProfile(updatedProfile);
//         handleUpdateProfile(data);
//         history.push(`/profiles/${id}`);
//       });
//   }

//   // function handleUpdateImageUrl(image_url) {
//   //   const formDataImage = {
//   //     image: formData.image}
//   //   formDataImage.image = image_url
//   //   setProfile(formDataImage)
//   // }

//   // function handleProfilePicSubmit(e) {
//   //   e.preventDefault();
//   //   const pic = new FormData()
//   //   pic.append('image', formData.image)
//   //   pic.append('user_id', formData.user_id)
//   //   // pic.append('id', profile.id)

//   //   fetch("/update_image", {
//   //     method: "PATCH",
//   //     body: pic,
//   //   })
//   //     .then((res) => res.json())
//   //     .then((profile) => handleImageUrl(profile.image_url));
//   // };

//   const handleProfileChange = (e) => {
//     setProfileData({
//       ...profileData,
//       [e.target.name]: e.target.value,
//     });
//     // console.log(formData)
//   };
//   const handleImageChange = (e) => {
//     setImageData({
//       ...imageData,
//       [e.target.name]: e.target.files[0],
//     });
//   };

// console.log(profile)

// new EditProfileForm code
