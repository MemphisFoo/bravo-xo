import React from "react";
import { Link, useHistory } from "react-router-dom";
import "./stylesheets/navbar.css";
import { Dropdown, Avatar } from "flowbite-react";
// import Filter from "./Filter.js"
function NavBar({ profile, currentUser, isLoggedIn, handleLogout }) {
  const {
    first_name,
    last_name,
    email,
    bio,
    user_id,
    sexuality_id,
    pronoun_id,
    show_id,
    profile_pic_url,
  } = profile;
  let history = useHistory();

  function handleClick() {
    const div=document.getElementById('backgroundDiv')
    console.log(div)
    div.className='defaultBackground'
  }
  // console.log(currentUser);
  return (
    <div id="navbar">
      <img id="navbar-logo" src="/bravoxo.png" alt="" onClick={handleClick} />
      {isLoggedIn ? (
        <>
          <button className="relative inline-flex items-center justify-center p-0.5 mb-2 mr-2 overflow-hidden text-2xl font-medium text-white rounded-lg group bg-gradient-to-br from-purple-500 to-pink-500 group-hover:from-purple-500 group-hover:to-pink-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-purple-200 dark:focus:ring-purple-800">
            <span className="relative px-5 py-2.5 transition-all ease-in duration-75 bg-black bg-opacity-99 dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
              <Link to="/" onClick={handleClick}>Home</Link>
            </span>
          </button>
          <button className="relative inline-flex items-center justify-center p-0.5 mb-2 mr-2 overflow-hidden text-2xl font-medium text-white rounded-lg group bg-gradient-to-br from-purple-500 to-pink-500 group-hover:from-purple-500 group-hover:to-pink-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-purple-200 dark:focus:ring-purple-800">
            <span className="relative px-5 py-2.5 transition-all ease-in duration-75 bg-black bg-opacity-99 dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
              <Link to={`/profiles/${currentUser.id}`} onClick={handleClick} >Profile</Link>
            </span>
          </button>
          <button className="relative inline-flex items-center justify-center p-0.5 mb-2 mr-2 overflow-hidden text-2xl font-medium text-white rounded-lg group bg-gradient-to-br from-purple-500 to-pink-500 group-hover:from-purple-500 group-hover:to-pink-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-purple-200 dark:focus:ring-purple-800">
            <span className="relative px-5 py-2.5 transition-all ease-in duration-75 bg-black bg-opacity-100 dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
              <Link to="/shows" onClick={handleClick}>
                Shows
              </Link>
            </span>
          </button>
          <button className="relative inline-flex items-center justify-center p-0.5 mb-2 mr-2 overflow-hidden text-2xl font-medium text-white rounded-lg group bg-gradient-to-br from-purple-500 to-pink-500 group-hover:from-purple-500 group-hover:to-pink-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-purple-200 dark:focus:ring-purple-800">
            <span className="relative px-5 py-2.5 transition-all ease-in duration-75 bg-black bg-opacity-99 dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
              <Link to="/" onClick={handleLogout}>
                Logout
              </Link>
            </span>
          </button>
          <div className="fixed right-10">
            <Dropdown
              label={
                <Avatar
                  alt="User settings"
                  img={profile_pic_url}
                  rounded={true}
                  bordered={true}
                  color="pink"
                  size="lg"
                />
              }
              arrowIcon={false}
              inline={true}
            >
              <Dropdown.Header>
                <span className="block text-sm">{currentUser.username}</span>
                <span className="block truncate text-sm font-medium"></span>
              </Dropdown.Header>
              {/* <Dropdown.Item
                onClick={() => {
                  history.push(`/profiles/${currentUser.id}`);
                }}
              >
                Profile
              </Dropdown.Item> */}
              <Dropdown.Item
                onClick={() => {
                  history.push(`/profiles/${currentUser.id}/edit`);
                }}
              >
                Edit Profile
              </Dropdown.Item>
              <Dropdown.Item>Messages (Still a WIP!)</Dropdown.Item>
              <Dropdown.Divider />
              <Dropdown.Item onClick={handleLogout}>Sign out</Dropdown.Item>
            </Dropdown>
          </div>
        </>
      ) : (
        <>
          <button className="relative inline-flex items-center justify-center p-0.5 mb-2 mr-2 overflow-hidden text-2xl font-medium text-white rounded-lg group bg-gradient-to-br from-purple-500 to-pink-500 group-hover:from-purple-500 group-hover:to-pink-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-purple-200 dark:focus:ring-purple-800">
            <span className="relative px-5 py-2.5 transition-all ease-in duration-75 bg-black bg-opacity-99 dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
              <Link to="/login">Login</Link>
            </span>
          </button>
          <button className="relative inline-flex items-center justify-center p-0.5 mb-2 mr-2 overflow-hidden text-2xl font-medium text-white rounded-lg group bg-gradient-to-br from-purple-500 to-pink-500 group-hover:from-purple-500 group-hover:to-pink-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-purple-200 dark:focus:ring-purple-800">
            <span className="relative px-5 py-2.5 transition-all ease-in duration-75 bg-black bg-opacity-99 dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
              <Link to="/signup">Signup</Link>
            </span>
          </button>
        </>
      )}
    </div>
  );
}

export default NavBar;
