const { JugadorNivel } = require('../baseDatos');

const registrarPuntaje = async (req, res) => {
  try {
    const puntaje = await JugadorNivel.create(req.body);
    res.status(201).json({ mensaje: "Puntaje registrado", resultado:null});
  } catch (error) {
    res.status(500).json({ mensaje: error.message, resultado:null });
  }
};

const obtenerPuntajePorJugador = async (req, res) => {
  try {
      const puntajes = await JugadorNivel.findAll({
          where: { 
            jugadorCedula:req.params.cedula
          }
      });

      if (!puntajes.length) {
          return res.status(404).json({ mensaje: "No se encontraron puntajes para este jugador", resultado:null });
      }
      return res.status(200).json({ mensaje: "Lista de puntajes", resultado:puntajes});
  } catch (error) {
      return res.status(500).json({ mensaje: error.message, resultado:null });
  }
};

module.exports = {
    registrarPuntaje,
    obtenerPuntajePorJugador
};