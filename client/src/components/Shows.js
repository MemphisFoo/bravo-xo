import React, {useState} from "react";
import ShowTitles from "./ShowTitles";
import { useHistory, useParams } from "react-router-dom";
import "./stylesheets/shows.css"
import ShowUsers from "./ShowUsers";
function Shows({ shows, setShowProfiles }) {
    const [profiles, setProfiles] = useState([])
    const [users, setUsers] = useState([])
    let history = useHistory()
    const { id } = useParams()

    function onShow(show) {
    // history.push(`/shows/${id}`)
    setProfiles(show.profiles)
    }

    function onUsers(show) {
    setUsers(show.users)
    }



    const showTitles = shows.map(show =>
            <ShowTitles key={show.id} show={show} onShow={onShow} onUsers={onUsers} />
    )


    return (<div className="flex justify-center">
        <div className="flex items-center">
        <div className="flex flex-row items-center">
        <div>
            {showTitles}
        </div>
        {profiles &&
        <ShowUsers users={users} profiles={profiles} />
        }
        </div>
        </div>
        </div>
    )
}

export default Shows;