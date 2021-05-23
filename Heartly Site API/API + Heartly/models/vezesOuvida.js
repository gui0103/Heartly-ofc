	'use strict';

/* 
lista e explicação dos Datatypes:
https://codewithhugo.com/sequelize-data-types-a-practical-guide/
*/

module.exports = (sequelize, DataTypes) => {
    let vezesOuvida = sequelize.define('vezesOuvida',{
		fkMusica: {
			field: 'fkMusica',
			type: DataTypes.INTEGER,
			primaryKey: true,
			foreignKey: true,
			autoIncrement: false
		},		
		fkUsuario: {
			field: 'fkUsuario',
			type: DataTypes.INTEGER,
			primaryKey: true,
			foreignKey: true,
			autoIncrement: false
		},	
		vezesOuvida: {
			field: 'senha',
			type: DataTypes.STRING,
			allowNull: false
		}
	}, 
	{
		tableName: 'vezesOuvida', 
		freezeTableName: true, 
		underscored: true,
		timestamps: false,
	});

    return vezesOuvida;
};
