const mongoose = require('mongoose');

const productsCollectionName = 'productos';

const productsSchema = new mongoose.Schema(
  {
    title: { type: String, required: true },
    price: { type: Number, required: true },
    thumbnail: { type: String, required: true },
  },
  { timestamps: true, versionKey: false }
);


const ProductsModel = mongoose.model(productsCollectionName, productsSchema);

module.exports = { ProductsModel };

