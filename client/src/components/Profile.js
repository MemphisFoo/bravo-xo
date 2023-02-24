import { Button } from "flowbite-react";
import React, { useState, useEffect } from "react";
// import "./stylesheets/profile.css";
import { useParams } from "react-router-dom";
// import EditProfileForm from "./EditProfileForm"
import { useHistory } from "react-router-dom";

function Profile({ currentProfile }) {
  console.log(currentProfile);
  const history = useHistory();
  const {
    profile_pic_url,
    first_name,
    last_name,
    bio,
    show_id,
    pronoun_id,
    sexuality_id,
    sexuality,
    pronoun,
    show,
  } = currentProfile;
  // // might need to put useEffect in a conditional in case currentUser is nil
  const [profileData, setProfileData] = useState({});
  // const { id } = useParams();

  // useEffect(() => {
  //   fetch(`/profiles/${id}`)
  //     .then((res) => res.json())
  //     .then((data) => setProfile(data));
  // }, [id]);
  // // console.log(profile)
  // if (!profile) {
  //   return <div>loading...</div>;
  // }

  // useEffect(() => {
  //   setProfileData({
  //     first_name: first_name,
  //     last_name: last_name,
  //     show_id: show_id,
  //     sexuality_id: sexuality_id,
  //     pronoun_id: pronoun_id

  //   })
  // }, [currentProfile, first_name, last_name, show_id, sexuality_id, pronoun_id])

  function handleClick() {
    history.push(`/profiles/${currentProfile.id}/edit`);
  }
  return (
    <div className="flex justify-center">
      <div className="p-4 w-half bg-gradient-to-br from-purple-500 to-pink-500 text-white rounded-lg border shadow-md md:flex-row md:max-w-lg dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700">
        <img
          className="object-cover w-full h-full rounded-t-lg md:h-48 md:w-48 md:rounded-none md:rounded-l-lg"
          src={profile_pic_url}
          alt=""
        />
        <div className="block mb-2 text-xl font-medium">
          <p>
            Name:
            {first_name} {last_name}
          </p>
          <p>Pronouns: {pronoun}</p>
          <p>Bio: "{bio}"</p>
          <p>Sexuality: {sexuality}</p>
          <p>Show: {show}</p>
          <div className="flex flex-wrap gap-2">
            <Button onClick={handleClick}>Edit</Button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Profile;
