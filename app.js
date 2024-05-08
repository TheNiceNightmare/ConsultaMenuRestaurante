const express = require('express');

const menuRoutes = require('./routes/menu-restaurante');

const app = express();

app.use('/api/menu',menuRoutes)

app.listen(3000, () => {
    console.log('Servidor Express en funcionamiento en el puerto 3000');
});