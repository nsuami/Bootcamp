const service = require("./posts.service.js");
const asyncErrorBoundary = require("../errors/asyncErrorBoundary");
const hasProperties = require("../errors/hasProperties");
// const POST_PROPS = ["post_body", "post_title"];
const hasPostProps = hasProperties("post_body", "post_title");

async function create(req, res) {
  const newPost = ({ post_id, post_body, post_title } = req.body.data);
  const createdPost = await service.create(newPost);
  res.status(201).json({ data: createdPost });
}

async function update(req, res) {
  const updatedPost = { ...req.body.data, post_id: res.locals.post.post_id };
  const data = await service.update(updatedPost);
  // const {post_body, post_id, post_title} = update;
  res.json({ data });
}

async function destroy(req, res) {
  await service.delete(res.locals.post.post_id);
  res.sendStatus(204);
}

async function postExists(req, res, next) {
  const { postId } = req.params;

  const post = await service.read(postId);
  if (post) {
    res.locals.post = post;
    return next();
  }
  return next({ status: 404, message: `Post cannot be found.` });
}

module.exports = {
  // create: [hasPostProps, asyncErrorBoundary(create)],
  create: [asyncErrorBoundary(hasPostProps), asyncErrorBoundary(create)],
  update: [asyncErrorBoundary(postExists), asyncErrorBoundary(update)],
  delete: [asyncErrorBoundary(postExists), asyncErrorBoundary(destroy)],
};
