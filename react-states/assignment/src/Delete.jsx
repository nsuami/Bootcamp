import React from "react";

export default function Delete({ index, posts, setPosts }) {
  // received call #7 here.
  // deleteHandler filters out the one post to be deleted by comparing the button's id to the post index via targeting
  // calls setPosts to update the state of posts with the edited array (deleted post is gone)
  const deleteHandler = ({ target }) => {
    posts = posts.filter(({}, idx) => target.id != idx);
    // #8
    setPosts(posts);
  };
  // #6 call received at this return statement, returns the delete button for each post
  // #7 deleteHandler is called when the button is clicked
  return (
    <button name="delete" id={index} onClick={deleteHandler}>
      Delete
    </button>
  );
}
