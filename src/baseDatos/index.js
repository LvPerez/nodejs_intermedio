require('dotenv').config();

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

sequelize.sync({ alter: true, force: false })
  .then(() => console.log('Sincronización completada.'))
  .catch(err => console.error('Error en la sincronización:', err));

module.exports = {
    Jugador,
    Nivel,
    JugadorNivel,
    sequelize
};