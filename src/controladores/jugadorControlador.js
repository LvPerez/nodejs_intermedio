const { Jugador } = require('../baseDatos');

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