import React from "react";
import ProfileCard from "./ProfileCard";

function ShowUsers({ profiles }) {
  const profileCard = profiles.map((profile) => (
    <ProfileCard key={profile.id} profile={profile} />
  ));

  return <div className="object-none object-center relative flex-inline items-center justify-center">{profileCard}</div>;
}

export default ShowUsers;
