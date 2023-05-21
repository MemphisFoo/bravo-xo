import { Button } from "flowbite-react";
import React from "react";
import { useHistory } from "react-router-dom";

function Profile({ currentProfile }) {
  const history = useHistory();
  const {
    profile_pic_url,
    first_name,
    last_name,
    bio,
    sexuality,
    pronoun,
    show,
  } = currentProfile;
  

  function handleClick() {
    history.push(`/profiles/${currentProfile.id}/edit`);
  }
  return (
  
      <div className="flex justify-center">
        <div
          className="fixed p-4
         w-half bg-gradient-to-br from-purple-500 to-pink-500 text-white rounded-lg border shadow-md md:flex-row md:max-w-lg dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700"
        >
          <img
            className="flex justify-center rounded-t-lg md:h-48 md:w-48 md:rounded-none md:rounded-l-lg"
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