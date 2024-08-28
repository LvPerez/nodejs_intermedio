module.exports = (sequelize, DataTypes) => {
    return sequelize.define('JugadorNivel', {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
          },  
          jugadorCedula: {
            type: DataTypes.STRING,
            references: {
              model: 'jugador',
              key: 'cedula'
            }
          },
          nivelId: {
            type: DataTypes.INTEGER,
            references: {
              model: 'nivel',
              key: 'id'
            }
          },
          puntajeMaximo: {
            type: DataTypes.INTEGER
          }
    }, {
      tableName: 'jugadornivel',
      timestamps: true,
    });
};