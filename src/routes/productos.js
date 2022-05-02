const express = require('express');
const { ProductosController } = require('../controller/productos');

const router = express.Router();

router.get('/', async (req, res) => {
  const productos = await ProductosController.getAll();
  res.json({
    data: productos,
  });
});

router.get('/:id', async (req, res) => {
  const { id } = req.params; 
  const producto = await ProductosController.getById(id);

  if (!producto)
    return res.status(404).json({
      msg: 'Producto no encontrado',
    });

  res.json({
    data: producto,
  });
});

router.post('/', async (req, res) => {
  const { title, description, thumbnail, price, stock } = req.body;
  console.log(req.body);

  if (!title || !description || !thumbnail || !price || !stock)
    return res.status(400).json({
      msg: 'Faltan datos requeridos',
    });

  const nuevoProducto = {
    title,
    description,
    thumbnail,
    price,
    stock,
  };
  
  await ProductosController.save(nuevoProducto);

  res.json({
    msg: 'Producto agregado',
  });
});

router.put('/:id', async (req, res) => {
  const { title, description, thumbnail, price, stock } = req.body;
  const { id } = req.params;

  const producto = await ProductosController.getById(id);

  if (!producto)
    return res.status(404).json({
      msg: 'Producto no encontrado',
    });


  if (!title || !description || !thumbnail || !price || !stock)
    return res.status(400).json({
      msg: 'Faltan datos requeridos',
    });

  const nuevoProducto = {
    title,
    description,
    thumbnail,
    price,
    stock,
  };
  
  const result = await ProductosController.update(id, nuevoProducto)

  res.json({
    data: result,
  });
});

router.delete('/:id', async (req, res) => {
  const { id } = req.params; 

  await ProductosController.deleteById(id)
  res.json({
    msg: `Producto con id: ${id} Eliminado`,
  });
});

module.exports = router;