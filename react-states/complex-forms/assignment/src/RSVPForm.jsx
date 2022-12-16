import React, { useState } from "react";

function RSVPForm() {
  const initFormData = {
    personName: "",
    age: "",
    newMember: false,
    comment: "",
  };
  const [formData, setFormData] = useState(initFormData);

  const formChangeHandler = ({ target }) => {
    const value = target.type === "checkbox" ? target.checked : target.value;
    setFormData({ ...formData, [target.name]: value });
  };

  const formSubmitHandler = (event) => {
    event.preventDefault();
    console.log(
      formData.personName,
      formData.age,
      formData.newMember,
      formData.comment
    );
    setFormData(initFormData);
  };

  return (
    <form onSubmit={formSubmitHandler}>
      <label htmlFor="personName">
        Name:
        <input
          onChange={formChangeHandler}
          type="text"
          name="personName"
          id="personName"
          value={formData.personName}
        />
      </label>
      <label htmlFor="age">
        Age:
        <select
          onChange={formChangeHandler}
          name="age"
          id="age"
          value={formData.age}
        >
          <option value={initFormData.age}>Prefer not to say</option>
          <option value="0-19">0-19</option>
          <option value="20-39">20-39</option>
          <option value="40-59">40-59</option>
          <option value="60+">60+"</option>
        </select>
      </label>
      <label htmlFor="newMember">
        New member?
        <input
          onChange={formChangeHandler}
          type="checkbox"
          name="newMember"
          id="newMember"
          value={formData.newMember}
        />
      </label>
      <label htmlFor="comment">
        Comment:
        <textarea
          onChange={formChangeHandler}
          name="comment"
          id="comment"
          cols="30"
          rows="10"
          value={formData.comment}
        ></textarea>
      </label>
    </form>
  );
}

export default RSVPForm;
