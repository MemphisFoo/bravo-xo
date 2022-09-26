import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import {Label, TextInput} from 'flowbite-react'
const SignupForm = ({setCurrentUser}) => {
  const [formData, setFormData] = useState({
    username: "",
    password: "",
    email: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };
  const history={useHistory}
  function handleSubmit(e) {
    e.preventDefault();

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
          setCurrentUser(user);history.push('/profile')
        });
      } else {
        res.json().then((errors) => {
          console.error(errors);
        });
      }
    });
  }

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="username">Username:</label>
      <input
        id="username-signup-input"
        type="text"
        name="username"
        value={formData.username}
        onChange={handleChange}
      />
      <label htmlFor="email">Email:</label>
      <input
        id="email-signup-input"
        type="text"
        name="email"
        value={formData.email}
        onChange={handleChange}
      />
      <label htmlFor="password">Password:</label>
      <input
        id="password-signup-input"
        type="password"
        name="password"
        value={formData.password}
        onChange={handleChange}
      />
      <button type="submit">Submit</button>
    </form>
  );
};

{/* <div className="flex flex-col gap-4">
  <div>
    <div className="mb-2 block">
      <Label
        htmlFor="username3"
        color="green"
        value="Your name"
      />
    </div>
    <TextInput
      id="username"
      placeholder="Bonnie Green"
      required={true}
      color="green"
      helperText={<React.Fragment><span className="font-medium">Alright!</span>{' '}Username available!</React.Fragment>}
    />
  </div>
  <div>
    <div className="mb-2 block">
      <Label
        htmlFor="username4"
        color="red"
        value="Your name"
      />
    </div>
    <TextInput
      id="username4"
      placeholder="Bonnie Green"
      required={true}
      color="red"
      helperText={<React.Fragment><span className="font-medium">Oops!</span>{' '}Username already taken!</React.Fragment>}
    />
  </div>
</div>

export default SignupForm; */}