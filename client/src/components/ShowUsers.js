import React, {useState} from 'react'

function ShowUsers({shows}) {
const [showProfiles, setShowProfiles] = useState(shows.profiles)

const profileCards = showProfiles.map(showProfile => 
<div key={showProfile.id} className="flex flex-col items-center bg-gradient-to-br from-purple-500 to-pink-500 text-white rounded-lg border shadow-md md:flex-row md:max-w-xl dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700">
  <img className="object-cover w-full h-96 rounded-t-lg md:h-auto md:w-48 md:rounded-none md:rounded-l-lg"  src={showProfiles.profile_photo} alt="" />
   <div>
    <p>
      Username: {showProfiles.username} ({showProfiles.pronoun.preference})
    </p>
    <p>
      Bio: "{showProfiles.bio}"
    </p>
    <p>Sexuality: {showProfiles.sexuality.choose}</p>
    <p>Show: {showProfiles.show.title}</p>
    </div>
    </div>
)
  return (<div>
    {profileCards}
  </div>
    // first thing Monday!
  )
}

export default ShowUsers