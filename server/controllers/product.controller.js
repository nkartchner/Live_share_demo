const Product = require("../models/product.model");

module.exports.findAllProducts = (req, res) => {
  Product.find()
    .then((allProducts) /** allProducts is an ARRAY */ =>
      res.json({ products: allProducts }))
    .catch(err => res.json({ message: "Something is wrong!", error: err }));
};

module.exports.findOneProduct = (req, res) => {
  console.log(
    "Logging the id of the product in the findOne function",
    req.params.id
  );
  Product.findOne({ _id: req.params.id })
    .then(oneSingleProduct => res.json({ product: oneSingleProduct }))
    .catch(err => res.json({ message: "Something is wrong!", error: err }));
};

module.exports.deleteProduct = (req, res) => {
  Product.deleteOne({ _id: req.params.id })
    .then(result => res.json({ result: result }))
    .catch(err =>
      res.json({ message: "Something is really wrong", error: err })
    );
};

module.exports.updateOneProduct = (req, res) => {
  Product.findOneAndUpdate({ _id: req.params.id }, req.body, { new: true })
    .then(updatedproduct => res.json({ product: updatedproduct }))
    .catch(err => res.json({ message: "Whoa dude!", error: err }));
};

module.exports.createNewProduct = (req, res) => {
  Product.create(req.body)
    .then(newProduct => res.json({ product: newProduct }))
    .catch(err => res.json({ message: "Something is wrong!!!", error: err }));
};
