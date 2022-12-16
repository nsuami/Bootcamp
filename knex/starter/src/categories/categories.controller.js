const categoriesService = require("./categories.service");

async function list(req, res, next) {
  // chaining .then() to the knex list executes the query
  // categoriesService.list().then((data) => res.json({ data }));
  const categories = await categoriesService.list();
  res.json({ data: categories });
}

module.exports = {
  list: [list],
};
