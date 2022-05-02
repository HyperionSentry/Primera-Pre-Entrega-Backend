const fs = require('fs');
const { v4: uuidv4 } = require('uuid');

class Productos {
  constructor(nombreArchivo) {
    this.archivo = nombreArchivo;
  }

  async getData() {
    const data = await fs.promises.readFile(this.archivo, 'utf-8');
    return JSON.parse(data);
  }

  async saveData(data) {
    await fs.promises.writeFile(this.archivo, JSON.stringify(data, null, '\t'));
  }

  async save(product) {
    const productos = await this.getData();
    let newId = uuidv4();

    const productoNuevo = {
      id: newId,
      timestamp: Date.now(),
      title: product.title,
      description: product.description,
      code: newId,
      thumbnail: product.thumbnail,
      price: product.price,
      stock: product.stock,
    };

    productos.push(productoNuevo);

    await this.saveData(productos);
  }

  async getById(number) {
    const productos = await this.getData();

    const indice = productos.findIndex((unProducto) => {
      if (unProducto.id === number) return true;
      else return false;
    });

    if (indice === -1) return null;

    return productos[indice];
  }

  async getAll() {
    const productos = await this.getData();

    return productos;
  }

  async deleteById(number) {
    const productos = await this.getData();

    const nuevoArray = productos.filter(
      (unProducto) => unProducto.id != number
    );

    await this.saveData(nuevoArray);
  }

  async deleteAll() {
    const nuevo = [];

    await this.saveData(nuevo);
  }

  async update(id, newData) {
    const productos = await this.getAll();

    const indice = productos.findIndex((unProducto) => unProducto.id === id);

    if (indice < 0) throw new Error('no existe el producto');

    const productUpdated = {
      id,
      timestamp: Date.now(),
      title: newData.title,
      description: newData.description,
      code:id,
      thumbnail: newData.thumbnail,
      price: newData.price,
      stock: newData.stock,
    };

    productos.splice(indice, 1, productUpdated);

    await this.saveData(productos)

    return productUpdated
  }
}

const ProductosController = new Productos('productos.json');

module.exports = {
  ProductosController: ProductosController,
};