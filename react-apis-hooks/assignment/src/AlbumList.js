import React from "react";

export default function AlbumList({ currentUser = {}, albums }) {
  if (Object.entries(currentUser).length !== 0) {
    return (
      <div>
        <h2>{currentUser.name} Albums</h2>
        <ul>
          {albums.map((selected) => {
            return (
              <li key={selected.id}>
                {selected.id} - {selected.title}
              </li>
            );
          })}
        </ul>
      </div>
    );
  }
  return <p>Please click on a user name to the left</p>;
}
