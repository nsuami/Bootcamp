const productsService = require("./products.service");

function read(req, res) {
  const { product: data } = res.locals;
  res.json({ data });
}

function list(req, res, next) {
  productsService.list().then((data) => res.json({ data }));
}

/**
 * MIDDLEWARE
 */

function productExists(req, res, next) {
  // productsService.read(req.params.productId).then((product) => {
  //   if (product) {
  //     res.locals.product = product;
  //     return next();
  //   }
  //   next({ status: 404, message: `Product cannot be found.` });
  // });

  const product = await productsService.getProductById(productId)
}
module.exports = {
  read: [productExists, read],
  list: [list],
};
