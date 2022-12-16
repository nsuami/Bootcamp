import React, { useState } from "react";

function DogForm() {
  const [name, setName] = useState("");
  const [breed, setBreed] = useState("");
  const [age, setAge] = useState("");

  const handlerName = ({ target }) => setName(target.value);
  const handlerBreed = ({ target }) => setBreed(target.value);
  const handlerAge = ({ target }) => setAge(target.value);

  const handlerSubmit = (event) => {
    event.preventDefault();
    console.log(name, breed, age);
    setName("");
    setBreed("");
    setAge("");
  };

  return (
    <form onSubmit={handlerSubmit}>
      <label htmlFor="name">
        name
        <input
          id="name"
          type="text"
          name="name"
          onChange={handlerName}
          value={name}
        />
      </label>
      <label htmlFor="breed">
        breed
        <input
          id="breed"
          type="text"
          name="breed"
          onChange={handlerBreed}
          value={breed}
        />
      </label>
      <label htmlFor="age">
        age
        <input id="age" type="text" name="age" onChange={handlerAge} value={age} />
      </label>
      <button type="submit">Submit</button>
    </form>
  );
}

export default DogForm;
