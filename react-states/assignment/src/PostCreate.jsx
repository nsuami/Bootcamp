import React, { useState } from "react";

/**
 * Displays the form to create a new post, which can be either an image or a text post.
 *
 * When the form is submitted, a new post is created and the form contents cleared.
 */
// TODO: When the form is submitted, a new post should be created, and the form contents cleared.

// For the tests to pass, the form below must have:
// - a `name="create"` attribute
// - one child `<button>` with a `type="submit"` attribute
// - one child `<select>` with a `name="type"` attribute
// - one child `<textarea>` or `<input>` (not both at the same time) with a `name="content"`
function PostCreate({ setPosts, posts }) {
  // set a state to hold and update the form data
  const [formData, setFormData] = useState({ type: "Text", content: "" });
  const formChangeHandler = ({ target }) => {
    setFormData({ ...formData, [target.name]: target.value });
  };
  // here is the submit handler. On submit, this function is called and ALL IT DOES
  // is send formData to posts and then empty formdata
  const formSubmitHandler = (event) => {
    event.preventDefault();
    setPosts([...posts, formData]);
    setFormData({ type: "Text", content: "" });
  };

  // when #2 form change handler is called, the target's name and the target's
  // value are pushed into formData on line 32
  return (
    /* #3 formSubmit is called, it calls the state setPosts and loads the current form data into the posts state. Then setFormData is called to set formData to be empty */ <form
      name="create"
      onSubmit={formSubmitHandler}
    >
      <fieldset>
        <legend>Create</legend>
        <div>
          <label htmlFor="type">Type: </label>
          <select
            id="type"
            name="type"
            required={true}
            value={formData.type}
            onChange={formChangeHandler} // #2
          >
            <option value="Text">Text</option>
            <option value="Image">Image</option>
          </select>
        </div>
        <div>
          <label htmlFor="content">Content: </label>
          {formData.type === "Text" ? (
            <textarea
              id="content"
              name="content"
              required={true}
              rows={3}
              value={formData.content}
              onChange={formChangeHandler} // #2
            />
          ) : (
            <input
              id="content"
              name="content"
              type="url"
              required={true}
              value={formData.content}
              onChange={formChangeHandler} // #2
            />
          )}
        </div>
        <div>
          <button type="submit">Submit</button>
        </div>
      </fieldset>
    </form>
  );
}

export default PostCreate;
