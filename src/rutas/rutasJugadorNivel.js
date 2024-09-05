const express = require('express');
const enrutador = express.Router();
const jugadorNivelControlador = require('../controladores/jugadorNivelControlador');

enrutador.post('/registrarPuntaje',jugadorNivelControlador.registrarPuntaje);
enrutador.get('/obtener/:cedula',jugadorNivelControlador.obtenerPuntajePorJugador);
module.exports = enrutador;