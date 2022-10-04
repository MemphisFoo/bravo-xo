import React from "react";
import { Link, useHistory } from "react-router-dom";
import "./stylesheets/navbar.css"
import { Dropdown, Avatar } from "flowbite-react";
// import Filter from "./Filter.js"
function NavBar({ handleLogout, isLoggedIn, currentUser }) {

  let history = useHistory()

  function handleClick() {
    history.push("/")
  }

  return (
    <div id="navbar">
      <img id="navbar-logo" src="https://upload.wikimedia.org/wikipedia/commons/thumb/f/fc/Bravo_TV_%282017_Logo%29.png/793px-Bravo_TV_%282017_Logo%29.png?20170210001612" alt=""
        onClick={handleClick} />
      {isLoggedIn ? (<>
        <button className="relative inline-flex items-center justify-center p-0.5 mb-2 mr-2 overflow-hidden text-sm font-medium text-white rounded-lg group bg-gradient-to-br from-purple-500 to-pink-500 group-hover:from-purple-500 group-hover:to-pink-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-purple-200 dark:focus:ring-purple-800">
          <span className="relative px-5 py-2.5 transition-all ease-in duration-75 bg-black bg-opacity-99 dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
            <Link to="/">Home</Link>
          </span>
        </button>
        {/* <Link className="route-link" to={`/profile/${currentUser.profile.id}`}>Profile</Link> */}
        <button className="relative inline-flex items-center justify-center p-0.5 mb-2 mr-2 overflow-hidden text-sm font-medium text-white rounded-lg group bg-gradient-to-br from-purple-500 to-pink-500 group-hover:from-purple-500 group-hover:to-pink-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-purple-200 dark:focus:ring-purple-800">
          <span className="relative px-5 py-2.5 transition-all ease-in duration-75 bg-black bg-opacity-99 dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
            <Link to="/" onClick={handleLogout}>Logout</Link>
          </span>
        </button>
        <button className="relative inline-flex items-center justify-center p-0.5 mb-2 mr-2 overflow-hidden text-sm font-medium text-white rounded-lg group bg-gradient-to-br from-purple-500 to-pink-500 group-hover:from-purple-500 group-hover:to-pink-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-purple-200 dark:focus:ring-purple-800">
          <span className="relative px-5 py-2.5 transition-all ease-in duration-75 bg-black bg-opacity-99 dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
            <Link to={`/profile/${currentUser.profile.id}` }>Profile</Link>
          </span>
        </button>
        <div className="fixed right-10">
          <Dropdown
            label={<Avatar alt="User settings" img={currentUser.profile.profile_photo} rounded={true} />}
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
            <Dropdown.Item onClick={() => { history.push(`/profile/${currentUser.profile.id}`) }}>
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
        : (<>
          <button className="relative inline-flex items-center justify-center p-0.5 mb-2 mr-2 overflow-hidden text-sm font-medium text-white rounded-lg group bg-gradient-to-br from-purple-500 to-pink-500 group-hover:from-purple-500 group-hover:to-pink-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-purple-200 dark:focus:ring-purple-800">
            <span className="relative px-5 py-2.5 transition-all ease-in duration-75 bg-black bg-opacity-99 dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
              <Link to="/login">Login</Link>
            </span>
          </button>
          <button className="relative inline-flex items-center justify-center p-0.5 mb-2 mr-2 overflow-hidden text-sm font-medium text-white rounded-lg group bg-gradient-to-br from-purple-500 to-pink-500 group-hover:from-purple-500 group-hover:to-pink-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-purple-200 dark:focus:ring-purple-800">
            <span className="relative px-5 py-2.5 transition-all ease-in duration-75 bg-black bg-opacity-99 dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
              <Link to="/signup">Signup</Link>
            </span>
          </button>
        </>)}
      <button className="relative inline-flex items-center justify-center p-0.5 mb-2 mr-2 overflow-hidden text-sm font-medium text-white rounded-lg group bg-gradient-to-br from-purple-500 to-pink-500 group-hover:from-purple-500 group-hover:to-pink-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-purple-200 dark:focus:ring-purple-800">
        <span className="relative px-5 py-2.5 transition-all ease-in duration-75 bg-black bg-opacity-100 dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
          <Link className="route-link" to="/shows">Shows</Link>
        </span>
      </button>
    </div>
  );
};

export default NavBar;