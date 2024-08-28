[8:05 p. m., 27/8/2024] Juan Pablo Profesor: require('dotenv').config();

const { Sequelize,DataTypes } = require('sequelize');
const jugadorModelo = require('../modelos/jugador');
const nivelModelo = require('../modelos/nivel');
const jugadorNivelModelo = require('../modelos/jugadorNivel');

const sequelize = new Sequelize(
  process.env.DB_NAME,
  process.env.DB_USER,
  process.env.DB_PASSWORD,
  {
    host: process.env.DB_HOST,
    dialect: process.env.DB_DIALECT
  }
);
const Jugador = jugadorModelo(sequelize, DataTypes);
const Nivel = nivelModelo(sequelize, DataTypes);
const JugadorNivel = jugadorNivelModelo(sequelize, DataTypes);

sequelize.authenticate()
  .then(() => console.log('Conectado a la base de datos.'))
  .catch(err => console.error('No se pudo conectar a la base de datos:', err));

seq…
[8:27 p. m., 27/8/2024] Juan Pablo Profesor: Controladores/jugadorControlador.js
[8:27 p. m., 27/8/2024] Juan Pablo Profesor: const { Jugador } = require('../baseDatos');

const registrarJugador = async (req, res) => {
  try {
    const { cedula, nombre, email} = req.body;
    
    const jugadorExistente = await Jugador.findByPk(cedula);

    if (jugadorExistente) {
      return res.status(409).json({mensaje:"El jugador ya existe",resultado:null});
    }
    
    const nuevoJugador = await Jugador.create({ cedula, nombre, email });
    res.status(201).json({ mensaje:"Jugador registrado",
      resultado: {
        cedula: nuevoJugador.cedula,
        nombre: nuevoJugador.nombre,
        email: nuevoJugador.email
      }});
  } catch (error) {
    res.status(500).json({ mensaje: error.message,resultado:null});
  }
};

const obtenerJugadores = async (req, res) => {
    try {
      const jugadores = await Jugador.findAll({
        attributes: ['cedula', 'nombre', 'email']
      });
      res.status(200).json({ mensaje:"Lista jugadores", resultado:jugadores });
    } catch (error) {
      res.status(500).json({ mensaje: error.message, resultado:null });
    }
};

module.exports = {
    registrarJugador,
    obtenerJugadores
};