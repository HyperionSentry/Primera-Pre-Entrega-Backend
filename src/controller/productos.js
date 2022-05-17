const ProductsModel = require('../models/products');

class Productos {
  constructor() {
    
  }

  async save(product) {
    await ProductsModel.create(product)
  }


  async getById(number) {

    const items = await ProductsModel.find({ id: number });
    return items
  }

  async getAll() {
    const items = await ProductsModel.find();
    return items
  }

  async deleteById(number) {
    
    await UsuarioModel.findByIdAndDelete(number);

  }

  async deleteAll() {
    await UsuarioModel.deleteMany({})
  }

  async update(id, newData) {
    const idDocumento = id;
  const u1 = await UsuarioModel.findByIdAndUpdate(
    idDocumento,
    {},
    newData
  );
  }
}

const ProductosController = new Productos();

module.exports = {
  ProductosController: ProductosController,
};