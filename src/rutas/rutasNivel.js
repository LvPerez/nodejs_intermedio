const express = require('express');
const enrutador = express.Router();
const nivelControlador = require('../controladores/nivelControlador');

enrutador.post('/crear',nivelControlador.crearNivel);
enrutador.get('/obtener',nivelControlador.obtenerNiveles);
module.exports = enrutador;