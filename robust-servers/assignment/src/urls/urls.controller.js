const path = require("path");
const urls = require(path.resolve("src/data/urls-data"));
const uses = require(path.resolve("src/data/uses-data"));

/**
 * CRUD
 */

function list(req, res, next) {
  res.json({ data: urls });
}

function create(req, res, next) {
  const newUrl = {
    href: res.locals.href,
    id: ++lastUrlId,
  };
  urls.push(newUrl);
  res.status(201).json({ data: newUrl });
}
function read(req, res, next) {
  //   const urlId = parseInt(req.params.urlId, 10);
  //   const foundUrl = urls.find((url) => url.id === urlId);
  //   if (!foundUrl) {
  //     next({ status: 404, message: `URL ${urlId} not found.` });
  //   }
  //   res.locals.urlId = urlId;
  const newUse = {
    id: ++lastUseId,
    urlId: res.locals.urlId,
    time: Date.now(),
  };
  uses.push(newUse);

  res.json({ data: res.locals.url });
}
function update(req, res, next) {
  const locals = res.locals;
  const { href: newHref, url } = locals;
  const oldHref = url.href;
  if (newHref !== oldHref) {
    url.href = newHref;
  }
  res.json({ data: url });
}

/**
 * MIDDLEWARE
 */

function urlExists(req, res, next) {
  const urlId = parseInt(req.params.urlId, 10);
  const foundUrl = urls.find((url) => url.id === urlId);
  if (!foundUrl) {
    return next({ status: 404, message: `URL ID ${urlId} not found.` });
  }
  res.locals.urlId = urlId;
  res.locals.url = foundUrl;
  return next();
}

function hasHref(req, res, next) {
  const { data: { href } = {} } = req.body;
  if (href) {
    res.locals.href = href;
    return next();
  }
  return next({ status: 400, message: "A 'href' property is required." });
}

let lastUrlId = urls.reduce((maxId, url) => Math.max(maxId, url.id), 0);
let lastUseId = uses.reduce((maxId, use) => Math.max(maxId, use.id), 0);

module.exports = {
  list,
  create: [hasHref, create],
  read: [urlExists, read],
  update: [urlExists, hasHref, update],
  urlExists,
};
