import React from 'react'
import ProfileCard from './ProfileCard'

function ShowUsers({profiles}) {

  const profileCard = profiles.map(profile =>
    <ProfileCard key={profile.id} profile={profile} />)

  return (<div>
        {profileCard}
  </div>

  )
}

export default ShowUsers