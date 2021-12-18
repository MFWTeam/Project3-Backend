const Product = require("../models/product")

const saveProduct = (req, res) => {
    const newProduct = new Product({
        name: req.body.name,
        barcode: req.body.barcode,
        price: req.body.price,
        quantity: req.body.quantity,
        storeName: req.body.storeName,
    });
  
    newProduct
      .save()
      .then((result) => res.json(result))
      .catch((err) => console.log(err));
  };
  
  const showProducts = (req, res) => {
    Product.find({}, (err, product) => {
      res.json(product);
    });
  };
  
  const showProduct = (req, res) => {
    Product.find({ _id: req.params.id, isDeleted: false })
      .populate("storeName")
      .exec((err, product) => {
        res.json(product);
      });
  };
  
  const deleteProduct = (req, res) => {
    Product.findByIdAndUpdate(
      { _id: req.params.id },
      {
        isDeleted: true,
      },
      (err, product) => {
        res.json(product);
      }
    );
  };
  
  const updateProduct = (req, res) => {
    Product.findByIdAndUpdate(
      { _id: req.params.id },
      {
        name: req.body.name,
        barcode: req.body.barcode,
        price: req.body.price,
        quantity: req.body.quantity,
        storeName: req.body.storeName,
      }
    )
      .populate("storeName")
      .exec((err, product) => {
        res.json(product);
      });
  };

  module.exports = { saveProduct, showProducts, showProduct, deleteProduct , updateProduct};