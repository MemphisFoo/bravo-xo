import React, { useState } from "react";
import { useHistory } from "react-router-dom";
// import {Label, TextInput} from 'flowbite-react'

const SignupForm = ({ setCurrentUser }) => {
  const [formData, setFormData] = useState({
    username: "",
    password: "",
    email: "",
    // image: null
    // profile: ""
  });
  // const handleImage = (e) => {
  //   setFormData({
  //     ...formData,
  //     [e.target.name]: e.target.files[0],
  //   });
  // };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };
  const history = { useHistory }
  function handleSubmit(e) {
    e.preventDefault();

    // const data = new FormData()
    // data.append('username', formData.username)
    // data.append('email', formData.email)
    // data.append('password', formData.password)
    // data.append('image', formData.image)


    const userCreds = { ...formData };

    fetch("/users", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(userCreds),
    }).then((res) => {
      if (res.ok) {
        res.json().then((user) => {
          setCurrentUser(user); history.push('/profiles/:id')
        });
      } else {
        res.json().then((errors) => {
          console.error(errors);
        });
      }
    });
  }

  return (
    <div className="p-4 w-full max-w-sm bg-black rounded-lg border border-purple-500 shadow-md sm:p-6 md:p-8 dark:bg-gray-800 dark:border-gray-700">
      <form onSubmit={handleSubmit} className="space-y-6">
        <div>
          <label htmlFor="username" className="block mb-2 text-sm font-medium text-purple-500 dark:text-purple-500">Username:</label>
          <input
            id="username-signup-input"
            type="text"
            name="username"
            value={formData.username}
            onChange={handleChange}
          />
          <label htmlFor="email" className="block mb-2 text-sm font-medium text-purple-500 dark:text-purple-500">Email:</label>
          <input
            id="email-signup-input"
            type="text"
            name="email"
            value={formData.email}
            onChange={handleChange}
          />
          <label htmlFor="password" className="block mb-2 text-sm font-medium text-purple-500 dark:text-purple-500">Password:</label>
          <input
            id="password-signup-input"
            type="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
          />
        </div>
        {/* <div>
          <label htmlFor="image" className="text-purple-500">Upload Photo:</label>
          <span className="relative px-5 py-2.5 transition-all ease-in duration-75 bg-black bg-opacity-99 dark:bg-gray-900 rounded-md group-hover:bg-opacity-0" >
            <input
              className="relative inline-flex items-center justify-center p-0.5 mb-2 mr-2 overflow-hidden text-sm font-medium text-white rounded-lg group bg-gradient-to-br from-purple-500 to-pink-500 group-hover:from-purple-500 group-hover:to-pink-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-purple-200 dark:focus:ring-purple-800"
              id="name"
              type="file"
              name="image"
              onChange={handleImage}
            />
          </span>
        </div> */}
        <button type="submit" className="text-white bg-gradient-to-r from-purple-500 to-pink-500 hover:bg-gradient-to-l focus:ring-4 focus:outline-none focus:ring-purple-200 dark:focus:ring-purple-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2">Submit</button>
      </form>
    </div>
  );
};
export default SignupForm;
