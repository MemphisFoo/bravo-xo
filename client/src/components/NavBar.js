import React from "react";
import { Link, useHistory } from "react-router-dom";
import "./stylesheets/navbar.css"
import {Dropdown, Avatar} from "flowbite-react";
import Filter from "./Filter.js"
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
      {/* <Link className="route-link" to={`/profile/${currentUser.profile.id}`}>Profile</Link> */}
      <Link className="route-link" to="/" onClick={handleLogout}>Logout</Link>
      <div className="fixed right-10">
      <Dropdown
  label={<Avatar alt="User settings" img={currentUser.profile.profile_photo} rounded={true}/>}
  arrowIcon={false}
  inline={true}
>
  <Dropdown.Header>
    <span className="block text-sm">
      {currentUser.username}
    </span>
    <span className="block truncate text-sm font-medium">
      
    </span>
  </Dropdown.Header>
  <Dropdown.Item onClick={() => {history.push(`/profile/${currentUser.profile.id}`)}}>
    Profile
  </Dropdown.Item>
  <Dropdown.Item>
    Settings
  </Dropdown.Item>
  <Dropdown.Item>
    Messages
  </Dropdown.Item>
  <Dropdown.Divider />
  <Dropdown.Item onClick={handleLogout}>
    Sign out
  </Dropdown.Item>
</Dropdown>
        </div></>)
      : (<><Link className="route-link" to="/login">Login</Link>
      <Link className="route-link" to="/signup">Signup</Link></>)}
      <Filter></Filter>
      </span>
    </div>
  );
};

export default NavBar;