const knex = require("../db/connection");

function create(post) {
  return knex("posts")
    .insert(post, "*")
    .then((response) => response[0]);
}

function read(postId) {
  return knex("posts").select("*").where({ post_id: postId }).first();
}

function update(updatedPost) {
  return knex("posts")
    .select("*")
    .where({ post_id: updatedPost.post_id })
    .update(updatedPost, "*")
    .then((posts) => posts[0]);
}

function destroy(post_id) {
  return knex("posts").where({ post_id }).del();
}

module.exports = {
  create,
  read,
  update,
  delete: destroy,
};
