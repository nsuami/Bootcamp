import React, { useState, useEffect, Fragment } from "react";
import { useRouteMatch, Link, Route, Switch } from "react-router-dom";
import UserAlbums from "./UserAlbums";

export default function App() {
  const [users, setUsers] = useState([]);
  const { url } = useRouteMatch();
  console.log(url);
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then(setUsers)
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <Fragment>
      {users.length > 0
        ? users.map((user, index) => (
            <div class="card" key={index}>
              <div class="card-body">
                <h5 class="card-title">{user.name}</h5>
                <Link to={`/user=${user.id}/albums`}>{user.email}</Link>
              </div>
            </div>
          ))
        : null}
      <Switch>
        <Route path="/user=:userId/albums">
          <UserAlbums />
        </Route>
      </Switch>
    </Fragment>
  );
}
