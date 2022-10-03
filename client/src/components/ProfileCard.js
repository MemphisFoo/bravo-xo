import React from 'react'

function ProfileCard() {
    return (
        <div className="flex flex-col items-center bg-gradient-to-br from-purple-500 to-pink-500 text-white rounded-lg border shadow-md md:flex-row md:max-w-xl dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700">
        <img className="object-cover w-full h-96 rounded-t-lg md:h-auto md:w-48 md:rounded-none md:rounded-l-lg"  src={profile.profile_photo} alt="" />
         <div>
          <p>
            Username: {profile.user.username} ({profile.pronoun.preference})
          </p>
          <p>
            Bio: "{profile.bio}"
          </p>
          <p>Sexuality: {profile.sexuality.choose}</p>
          <p>Show: {profile.show.title}</p>
          <div className="flex flex-wrap gap-2">
            </div>
            </div>
            </div>
    )
}

export default ProfileCard