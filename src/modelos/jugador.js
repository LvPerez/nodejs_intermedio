module.exports = (sequelize, DataTypes) => {
    return sequelize.define('Jugador', {
        cedula: {
            type: DataTypes.STRING,
            primaryKey: true
        },
        nombre: {
            type: DataTypes.STRING,
            allowNull: false
        },
        email: {
            type: DataTypes.STRING,
            allowNull: false,
            unique:'email'
        }
    }, {
      tableName: 'jugador',
      timestamps: true,
    });
};