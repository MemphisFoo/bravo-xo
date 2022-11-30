import React from 'react'

function ProfileCard({profile}, {user}) {
  
  
    return (
    
          <div className="overflow-auto flex items-center justify-center bg-gradient-to-br from-pink-500 to-purple-500 text-white rounded-lg border shadow-md md:flex-row md:max-w-xl dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700">
        <img className="object-cover w-full h-96 rounded-t-lg md:h-auto md:w-48 md:rounded-none md:rounded-l-lg"  src={profile.profile_pic_url} alt="" />
         <div>
          <p>
            Username: {profile.first_name} {profile.last_name} ({profile.pronoun})
          </p>
          <p>
            Bio: "{profile.bio}"
          </p>
          <p>Sexuality: {profile.sexuality}</p>
          <p>Show: {profile.show}</p>
          <br/>
          <div className="flex flex-wrap gap-2">
          <button className="relative inline-flex items-center justify-center p-0.5 mb-2 mr-2 overflow-hidden text-sm font-medium text-white rounded-lg group bg-gradient-to-br from-purple-500 to-pink-500 group-hover:from-purple-500 group-hover:to-pink-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-purple-200 dark:focus:ring-purple-800">
          <span className="relative px-5 py-2.5 transition-all ease-in duration-75 bg-black bg-opacity-99 dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
          {/* <a href={`mailto:${profile.user.email}`} target="_blank" rel="noopener noreferrer"> Let's chat!</a> */}
          </span>
        </button>
          </div>
            </div>
            </div>
           
    )
}

export default ProfileCard