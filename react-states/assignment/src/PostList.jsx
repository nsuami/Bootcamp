import React from "react";
import Delete from "./Delete";

/**
 * Diplays a list of either text or image posts.
 *
 */
function PostList({ posts, setPosts }) {
  // TODO: Diplay the list of posts.
  // TODO: Create at least one additional component that is used by this component.
  // TODO: Each post must have className="post" for the tests to work.
  // TODO: Each post must have a delete button - <button name="delete">Delete</button> - that deletes the post when clicked

  // received posts argument and is named list
  // received state pair function setPosts and is passed into Delete
  const printList = (list) => {
    // list is mapped and reversed into post elements for the DOM
    // reversed to appear to be a live feed
    list = list.reverse().map(({ type, content }, index) => (
      <article className="post">
        <div>
          {type === "Text" ? (
            <p>{content}</p>
          ) : (
            <img src={content} alt={`${index}-img`}></img>
          )}
        </div>
        <Delete index={index} posts={posts} setPosts={setPosts} />
      </article>
    ));

    // #6 Delete is called with the index from list.map, posts and setPosts as props
    return list;
  };

  // #5
  // printList is called with argument posts
  return <div className="post-list">{printList(posts)}</div>;
}

export default PostList;
