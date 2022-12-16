const path = require("path");
const uses = require(path.resolve("src/data/uses-data"));

/**
 * CRUD
 */

function list(req, res, next) {
  const url = res.locals.url;

  if (url) {
    const useList = uses.filter((use) => use.urlId === url.id);
    return res.json({ data: useList });
  }

  res.json({ data: uses });
}

function read(req, res, next) {
  res.json({ data: res.locals.use });
}

function destroy(req, res, next) {
  const indexToDelete = uses.findIndex((use) => use.id === res.locals.useId);
  uses.splice(indexToDelete, 1);
  res.sendStatus(204);
}

/**
 * MIDDLEWARE
 */

function useExists(req, res, next) {
  const useId = parseInt(req.params.useId, 10);
  const foundUse = uses.find((use) => use.id === useId);

  if (!foundUse) {
    return next({ status: 404, message: `Use ID ${useId} not found.` });
  }
  res.locals.useId = useId;
  res.locals.use = foundUse;
  return next();
}

// urls/2/uses

module.exports = {
  list,
  read: [useExists, read],
  destroy: [useExists, destroy],
};
