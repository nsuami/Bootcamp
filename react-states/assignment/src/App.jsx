import React, { useState } from "react";
import "./App.css";
import PostCreate from "./PostCreate";
import PostList from "./PostList";

function App() {
  // call #8 is received here and posts is updated and rendered in index
  const [posts, setPosts] = useState([]); //> { type: "Text", content: "React is schizophrenic"}

  // TODO: Add the ability for the <PostCreate /> component to create new posts.
  // TODO: Add the ability for the <PostList /> component to delete an existing post.

  return (
    // #1
    // Post create is called with posts and setPosts passed in as props
    // #4
    // when PostList is called, it passes in posts and setPosts as props
    <div className="App">
      <PostCreate posts={posts} setPosts={setPosts} />
      <PostList posts={posts} setPosts={setPosts} />
    </div>
  );
}
export default App;
