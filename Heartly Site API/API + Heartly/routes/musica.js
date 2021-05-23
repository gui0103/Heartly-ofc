var express = require('express');
var router = express.Router();
var sequelize = require('../models').sequelize;
var musica = require('../models').musica;
var vezesOuvida = require('../models').vezesOuvida;

let sessoes = [];

/* Recuperar usuário por login e senha */
router.post('/aumentarVezesOuvidaGeral/:value_musica/:vt_fkUsuario', function (req, res, next) {
	var value_musica = req.params.value_musica;
	var vt_fkUsuario = req.params.vt_fkUsuario

	let instrucaoSql = `select * from vezesOuvida where fkMusica='${value_musica}' and fkUsuario='${vt_fkUsuario}'`;
	console.log(instrucaoSql);

	sequelize.query(instrucaoSql, {
		model: vezesOuvida
	}).then(resultado => {
		console.log(`Encontrados: ${resultado.length}`);

		if (resultado.length == 1) {
            console.log('É us guri bah tche!')
			instrucaoSql = `update vezesOuvida set vezesOuvida = 
			vezesOuvida +1 where fkMusica="${value_musica}" and fkUsuario="${vt_fkUsuario}"`;

			sequelize.query(instrucaoSql, {
				type: sequelize.QueryTypes.UPDATE
			});

		}else {
			console.log('ui')
			instrucaoSql = `insert into vezesOuvida values (${value_musica}, ${vt_fkUsuario}, 1)`;
			
			sequelize.query(instrucaoSql, {
				type: sequelize.QueryTypes.INSERT
			});
		}

	}).catch(erro => {
		console.error(erro);
		res.status(500).send(erro.message);
  	});

	instrucaoSql = `update musica set vezesOuvidaGeral = vezesOuvidaGeral +1 where idMusica="${value_musica}" `;
	console.log(instrucaoSql);

	sequelize.query(instrucaoSql, {
		type: sequelize.QueryTypes.UPDATE
	});


});

module.exports = router;