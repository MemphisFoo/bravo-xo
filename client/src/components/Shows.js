import React, { useState } from "react";
import ShowTitles from "./ShowTitles";
import { useHistory, useParams } from "react-router-dom";
import ShowUsers from "./ShowUsers";
function Shows({ shows, setShowProfiles }) {
  const [profiles, setProfiles] = useState([]);

  let history = useHistory();
  const { id } = useParams();

  function onShow(show) {
    // history.push(`/shows/${id}`)
    setProfiles(show.profiles);
  }

  const showTitles = shows.map((show) => (
    <ShowTitles key={show.id} show={show} onShow={onShow} />
  ));

  return (
          
            <div>{showTitles}
            {profiles && <ShowUsers profiles={profiles} />}
          </div>
  );
}

export default Shows;
