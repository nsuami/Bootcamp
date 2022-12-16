import React, { useEffect, useState } from "react";

function App() {
  const [toDos, setToDos] = useState([]);

  // Load data from https://jsonplaceholder.typicode.com/todos?userId=2
  // make a use effect hook to load this data once
  useEffect(() => {
    // within the use effect, create async function to contain the calls
    // since fetch is a promise we need async notation and functionality
    //
    async function loadToDos() {
      // wait for the data to be fetched
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/todos?userId=2"
      ); //> DONE
      // wait for the data to be tidied up into some json stuff or something
      const toDosFromAPI = await response.json(); //> DONE
      // update the state with an arrow function pointing to the new values to avoid
      // "race conditions"
      setToDos(() => toDosFromAPI);
    }
    loadToDos();
  }, []);
  return (
    <div className="App">
      <h1>To Do List</h1>
      <ul className="todo-list">
        {toDos.map((todo) => (
          <li
            key={todo.id}
            style={{
              textDecoration: todo.completed ? "line-through" : "",
            }}
          >
            {todo.title}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
