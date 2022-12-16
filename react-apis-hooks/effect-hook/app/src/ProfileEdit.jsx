import React, { useState, useEffect } from "react";

export default function ProfileEdit() {
  const [user, setUser] = useState({});

  const changeHandler = (event) => {
    setUser({ ...user, [event.target.name]: event.target.value });
  };

  const submitHandler = async (event) => {
    event.preventDefault();
    const response = await fetch(
      `https://jsonplaceholder.typicode.com/users/${user.id}`,
      {
        method: "PUT",
        body: JSON.stringify(user),
      }
    );
    const savedData = await response.json();
    console.log("Saved user!", savedData);
  };

  useEffect(() => {
    async function loadUsers() {
      const response = await fetch("https://jsonplaceholder.typicode.com/users/10");
      const userFromAPI = await response.json();
      setUser(userFromAPI);
    }
    loadUsers();
  }, []); // Passing [] so that it only runs the effect once

  useEffect(() => {
    if (user.name) {
      document.title = `${user.name} : Edit Profile`;
    } else {
      document.title = "Edit Profile";
    }
  }, [user]); // Rerun this effect when the user changes

  if (user.id) {
    // `user.id` is truthy after the API call returns
    return (
      <form name="profileEdit" onSubmit={submitHandler}>
        <div>
          <label htmlFor="username">User Name:</label>
          <input
            id="username"
            name="username"
            type="text"
            value={user.username}
            required={true}
            onChange={changeHandler}
          />
        </div>
        <div>
          <label htmlFor="email">Email:</label>
          <input
            id="email"
            name="email"
            type="email"
            value={user.email}
            required={true}
            onChange={changeHandler}
          />
        </div>
        <button type="submit">Submit</button>
      </form>
    );
  }
  return "Loading...";
}
