import React, { useState, useEffect } from "react";
import ShowTitles from "./ShowTitles";
import { useHistory, useParams } from "react-router-dom";
import ShowUsers from "./ShowUsers";
function Shows() {
  const [profiles, setProfiles] = useState([])
  const [shows, setShows] = useState([]);

  let history = useHistory();
  const { id } = useParams();

  useEffect(() => {
    fetch("/shows")
      .then((r) => r.json())
      .then((data) => setShows(data));
  });

  function onShow(show) {
    // history.push(`/shows/${id}`)
    setProfiles(show.profiles);
  }

  const showTitles = shows.map((show) => (
    <ShowTitles key={show.id} show={show} onShow={onShow} />
  ));

  return (
          
            <div>
              {showTitles}
              {profiles && <ShowUsers profiles={profiles} />}
          </div>
  );
}

export default Shows;
