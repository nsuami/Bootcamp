import ProfileEdit from "./ProfileEdit";
import React, { useState } from "react";

function App() {
  const [userId, setUserID] = useState(1);

  const userIds = [1, 2, 3, 4];

  return (
    <div className="App">
      {userIds.map((id) => (
        <button key={id} onClick={() => setUserID(id)}>
          User ID {id}
        </button>
      ))}
      <h2>User ID {userId}</h2>
      <ProfileEdit userID={userId} />
    </div>
  );
}

export default App;
