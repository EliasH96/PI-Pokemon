const { DataTypes } = require('sequelize');
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
	// defino el modelo
	sequelize.define('pokemon', {
		name: {
			type: DataTypes.STRING,
			allowNull: false,
			unique: true,
		},
		id: {
			type: DataTypes.UUID,
			defaultValue: DataTypes.UUIDV4,
			primaryKey: true,
			allowNull: false,
		},
		hp: {
			type: DataTypes.INTEGER,
		},
		img: {
			type: DataTypes.TEXT,
		},
		attack: {
			type: DataTypes.INTEGER,
		},
		defense: {
			type: DataTypes.INTEGER,
		},
		speed: {
			type: DataTypes.INTEGER,
		},
		height: {
			type: DataTypes.INTEGER,
		},
		weight: {
			type: DataTypes.INTEGER,
		},
	});
};