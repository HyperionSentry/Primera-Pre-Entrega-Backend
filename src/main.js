const express = require('express');
const mainRouter = require('./routes');

const app = express();
app.use(express.static('public'));
app.listen(8080, () => console.log('Servidor Arriba'));

app.use(express.json());

app.use('/api', mainRouter);

app.use((req, res) => {
    res.status(404).json({
      msg: 'Ruta no encontrada',
    });
  });