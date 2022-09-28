import React from "react";
import { Link, useHistory } from "react-router-dom";
import "./stylesheets/navbar.css"
// import Filter from "./components/Filter.js"
function NavBar({handleLogout, isLoggedIn, currentUser}) {

  let history = useHistory()

  function handleClick(){
    history.push("/")
  }

  return (
    <div id="navbar">
      <img id="navbar-logo" src="https://upload.wikimedia.org/wikipedia/commons/thumb/f/fc/Bravo_TV_%282017_Logo%29.png/793px-Bravo_TV_%282017_Logo%29.png?20170210001612" alt="" 
      onClick = {handleClick}/>
      <span id="banner">
      {isLoggedIn ? (<><Link className="route-link" to="/">Home</Link>
      <Link className="route-link" to={`/profile/${currentUser.profile.id}`}>Profile</Link>
      <Link className="route-link" to="/" onClick={handleLogout}>Logout</Link></>)
      : (<><Link className="route-link" to="/login">Login</Link>
      <Link className="route-link" to="/signup">Signup</Link></>)}
      {/* <Filter></Filter> */}
      </span>
    </div>
  );
};

export default NavBar;