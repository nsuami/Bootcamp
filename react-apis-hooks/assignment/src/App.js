import React, { useState, useEffect } from "react";
import "./App.css";

import AlbumList from "./AlbumList";
import UserList from "./UserList";

export default function App() {
  const [users, setUsers] = useState([]);
  const [currentUser, setCurrentUser] = useState({});
  const [albums, setCurrentAlbums] = useState([]);
  const title = document.title;
  useEffect(() => {
    document.title = `Awesome Album App`;
    setUsers(() => []);
    const abortController = new AbortController();
    async function loadUsers() {
      try {
        const response = await fetch("https://jsonplaceholder.typicode.com/users", {
          signal: abortController.signal,
        });
        const usersFromAPI = await response.json();
        setUsers(() => usersFromAPI);
      } catch (error) {
        if (error.name === "AbortError") {
          console.log("aborted users process");
        } else {
          throw error;
        }
      }
    }
    loadUsers();
    return () => {
      document.title = title;
      abortController.abort();
    };
  }, []);

  useEffect(() => {
    const abortController = new AbortController();
    async function loadAlbums() {
      try {
        const response = await fetch(
          `https://jsonplaceholder.typicode.com/albums?userId=${currentUser.id}`,
          { signal: abortController.signal }
        );
        const albumsFromAPI = await response.json();
        setCurrentAlbums(() => albumsFromAPI);
      } catch (error) {
        if (error.name === "AbortError") {
          console.log("Aborted user");
        } else {
          throw error;
        }
      }
    }
    loadAlbums();
    return () => {
      abortController.abort();
    };
  }, [currentUser]);

  // Load data from https://jsonplaceholder.typicode.com/todos?userId=3
  return (
    <div className="App">
      <div className="left column">
        <UserList users={users} setCurrentUser={setCurrentUser} />
      </div>
      <div className="right column">
        <AlbumList currentUser={currentUser} albums={albums} />
      </div>
    </div>
  );
}
