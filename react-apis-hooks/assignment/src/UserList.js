import React from "react";

export default function UserList({ users, setCurrentUser }) {
  return (
    <ul className="user-list">
      {users.map((user) => (
        <li key={user.id}>
          <button type="button" onClick={() => setCurrentUser(() => user)}>
            {user.name}
          </button>
        </li>
      ))}
    </ul>
  );
}
