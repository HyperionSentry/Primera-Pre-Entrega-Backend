const express = require('express');
const mainRouter = require('./routes');
const initMongoDB = require('./services/database');

const app = express();
app.use(express.static('public'));

initMongoDB();
app.listen(8080, () => console.log('Servidor Arriba'));

app.use(express.json());

app.use('/api', mainRouter);

app.use((req, res) => {
    res.status(404).json({
      msg: 'Ruta no encontrada',
    });
  });