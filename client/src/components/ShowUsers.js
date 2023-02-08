import React from 'react'
import ProfileCard from './ProfileCard'

function ShowUsers({users, profiles}) {

  const profileCard = profiles.map(profile =>
    <ProfileCard key={profile.id} profile={profile} users={users} />)


  return (<div className="flex-center">
        {profileCard}
  </div>

  )
}

export default ShowUsers