/* const fs = require('fs');
const { v4: uuidv4 } = require('uuid');

class Carrito {
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

  async save(miObjeto) {

    await this.saveData(productos);
  }

  async addToCart(productToAdd) {
    const cart = await this.getData();
    const cartProducts = cart.productos

    cartProducts.push(productToAdd) 
    cart.productos = cartProducts;

    await this.saveData(cart);
  }


  async newCart(miObjeto) {

    const nuevoCarrito ={
    id: uuidv4(),
    timestamp: Date.now(),
    productos: [],
    }

    await this.saveData(nuevoCarrito);

    return nuevoCarrito.id
  }


  async listProduct(id) {
    const carrito = await this.getData();
    
    if (id !== carrito.id) {
      return false;
    } else {
      const cartProducts = carrito.productos
      return cartProducts;
    }
  }


  async deleteCart(id) {
    const carrito = await this.getData();

    if (id !== carrito.id) {
      return false;
    } else {
      const emptyCart = {} 
      await this.saveData(emptyCart);
      return true;
    }     
  }


  async deleteProductFromCart(id, id_prod) {
    const cart = await this.getData();

    if (id !== cart.id) {
      return false;
    } else {
      const cartProducts = cart.productos
      const newProductsArray = cartProducts.filter( (product) => product.id != id_prod);
      
      cart.productos = newProductsArray;

      await this.saveData(cart);

      return true;
    }
    
}
  
}

const CarritoController = new Carrito('carrito.json');

module.exports = {
    CarritoController: CarritoController,
  }; */