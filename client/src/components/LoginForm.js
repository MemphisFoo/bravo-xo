import React, { useState } from "react";
import { useHistory } from 'react-router-dom';


const LoginForm = ({ isLoggedIn, setIsLoggedIn, setCurrentUser }) => {
  const [formData, setFormData] = useState({
    username: "",
    password: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };
  const history = useHistory()
  const handleSubmit = (event) => {
    event.preventDefault();
    fetch("/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    }).then((res) => {
      if (res.ok) {
        res.json().then((user) => {
          setCurrentUser(user); history.push('/')
          setIsLoggedIn(true)
          console.log(isLoggedIn)
          console.log(user)
        });
      } else {
        res.json().then((errors) => {
          console.error(errors);
        });
      }
    });
  };

  return (
    <div className="p-4 w-full max-w-sm bg-black rounded-lg border border-purple-500 shadow-md sm:p-6 md:p-8 dark:bg-gray-800 dark:border-gray-700">
      <form onSubmit={handleSubmit} className="space-y-6" action="#">
        <h5 className="text-xl font-medium text-white dark:text-white">Enter the Bravo-verse!</h5>
        <div>
          <label htmlFor="username" className="block mb-2 text-sm font-medium text-purple-500 dark:text-purple-500">Username</label>
          <input type="username" name="username" id="username" value={formData.username} onChange={handleChange} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" required />
        </div>
        <div>
          <label htmlFor="password" className="block mb-2 text-sm font-medium text-pink-500 dark:text-pink-500">Password</label>
          <input type="password" name="password" id="password" value={formData.password} onChange={handleChange} placeholder="••••••••" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" required />
        </div>
        {/* <div className="flex items-start">
          <div className="flex items-center h-5">
            <input id="remember" type="checkbox" value="" className="w-4 h-4 bg-gray-50 rounded border border-gray-300 focus:ring-3 focus:ring-blue-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-blue-600 dark:ring-offset-gray-800" required />
          </div>
          <label htmlFor="remember" className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">Remember me</label>
        </div> */}
        <button type="submit" className="text-white bg-gradient-to-r from-purple-500 to-pink-500 hover:bg-gradient-to-l focus:ring-4 focus:outline-none focus:ring-purple-200 dark:focus:ring-purple-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2">
          Login
        </button>
        <div className="text-sm font-medium text-white-500 dark:text-gray-300">
          Not registered? <a href="/signup" className="text-blue-700 hover:underline dark:text-blue-500">Create account</a>
        </div>
      </form>
    </div>

    /* <form onSubmit={handleSubmit}>
      <label htmlFor="username">Username:</label>
      <input
        id="username-input"
        type="text"
        name="username"
        value={formData.username}
        onChange={handleChange}
      />
      <label htmlFor="password">Password:</label>
      <input
        id="password-input"
        type="password"
        name="password"
        value={formData.password}
        onChange={handleChange}
      />
      <button type="submit">Submit</button>
    </form> */
  );
};

export default LoginForm;