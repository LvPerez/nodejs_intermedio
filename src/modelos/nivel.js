module.exports = (sequelize, DataTypes) => {
    return sequelize.define('Nivel', {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        nombre: {
            type: DataTypes.STRING,
            allowNull: false
        },
        descripcion: {
            type: DataTypes.STRING,
            allowNull: false
        }
    }, {
      tableName: 'nivel',
      timestamps: true,
    });
};