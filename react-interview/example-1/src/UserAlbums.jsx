import React, { useState, useEffect, Fragment } from "react";
import { useRouteMatch } from "react-router-dom";

export default function UserAlbums() {
  const [albums, setAlbums] = useState([]);
  const {
    params: { userId },
  } = useRouteMatch();
  const route = useRouteMatch();
  console.log(route);

  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/albums?userId=${userId}`)
      .then((response) => response.json())
      .then(setAlbums)
      .catch(console.log);
  }, [userId]);

  console.log(userId);
  console.log(albums);

  return (
    <Fragment>
      {albums.length > 0
        ? albums.map((album, index) => (
            <div class="card w-75">
              <div class="card-body" key={index}>
                <h5 class="card-title">{album.title}</h5>
              </div>
            </div>
          ))
        : null}
    </Fragment>
  );
}
