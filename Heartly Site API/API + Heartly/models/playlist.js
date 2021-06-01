	'use strict';

/* 
lista e explicação dos Datatypes:
https://codewithhugo.com/sequelize-data-types-a-practical-guide/
*/

module.exports = (sequelize, DataTypes) => {
    let playlist = sequelize.define('playlist',{
		nomePlaylist: {
			field: 'nomePlaylist',
			type: DataTypes.STRING,
			allowNull: false
		},
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
		}
	}, 
	{
		tableName: 'playlist', 
		freezeTableName: true, 
		underscored: true,
		timestamps: false,
	});

    return playlist;
};
