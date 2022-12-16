const knex = require("../db/connection");

function list() {
  return knex("comments").select("*");
}

function listCommenterCount() {
  return knex("comments as c")
    .join("users as u", "c.commenter_id", "u.user_id")
    .select(knex.raw("count(c.comment_id), u.user_email as commenter_email"))
    .groupBy("commenter_email")
    .orderBy("commenter_email", "asc");
}

// return knex("comments as c")
//   .join("users as u", "c.commenter_id", "u.user_id")
//   .count("comment_id")
//   .groupBy("u.user_email as commenter_email")
//   .orderBy("commenter_email", "desc");

function read(commentId) {
  return knex("comments as c")
    .join("posts as p", "p.post_id", "c.post_id")
    .join("users as u", "u.user_id", "c.commenter_id")
    .select(
      "c.comment_id",
      "c.comment",
      "u.user_email as commenter_email",
      "p.post_body as commented_post"
    )
    .where({ comment_id: commentId })
    .then((comments) => comments[0]);
}

module.exports = {
  list,
  listCommenterCount,
  read,
};
