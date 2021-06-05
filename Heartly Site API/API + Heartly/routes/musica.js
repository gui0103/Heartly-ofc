var express = require('express');
var router = express.Router();
var sequelize = require('../models').sequelize;
var musica = require('../models').musica;
var vezesOuvida = require('../models').vezesOuvida;
var playlist = require('../models').playlist;

let sessoes = [];

/* Aumenta o número de vezes que a música foi ouvida */
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
			console.log('funcionou!')
			instrucaoSql = `update vezesOuvida set vezesOuvida = 
			vezesOuvida +1 where fkMusica='${value_musica}' and fkUsuario='${vt_fkUsuario}'`;

			sequelize.query(instrucaoSql, {
				type: sequelize.QueryTypes.UPDATE
			});

		} else {
			console.log('insert realizado')
			instrucaoSql = `insert into vezesOuvida values (${value_musica}, ${vt_fkUsuario}, 1)`;

			sequelize.query(instrucaoSql, {
				type: sequelize.QueryTypes.INSERT
			});
		}

	}).catch(erro => {
		console.error(erro);
		res.status(500).send(erro.message);
	});

	instrucaoSql = `update musica set vezesOuvidaGeral = vezesOuvidaGeral +1 where idMusica= '${value_musica}' `;
	console.log(instrucaoSql);

	sequelize.query(instrucaoSql, {
		type: sequelize.QueryTypes.UPDATE
	});


});

/* Soma quantas músicas o usuário ouviu */
router.post('/mostrarMusicasOuvidasTotal/:vt_fkUsuario', function (req, res, next) {
	var vt_fkUsuario = req.params.vt_fkUsuario

	let instrucaoSql = `select sum(vezesOuvida) as soma from vezesOuvida where fkUsuario='${vt_fkUsuario}'`;
	console.log(instrucaoSql);

	sequelize.query(instrucaoSql, {
			type: sequelize.QueryTypes.SELECT
		})
		.then(resultado => {
			res.json(resultado);
		}).catch(erro => {
			console.error(erro);
			res.status(500).send(erro.message);
		});

});

/* Mostra quais músicas o usuário mais ouviu */
router.post('/mostrarMusicasMaisOuvidas/:vt_fkUsuario', function (req, res, next) {
	var vt_fkUsuario = req.params.vt_fkUsuario;
	console.log('Músicas mais ouvidas funcionou');

	let instrucaoSql = `select vezesOuvida, titulo from vezesOuvida join musica on 
	fkMusica = idMusica where fkUsuario = '${vt_fkUsuario}' order by vezesOuvida desc`;
	console.log(instrucaoSql);

	sequelize.query(instrucaoSql, {
			type: sequelize.QueryTypes.SELECT
		})
		.then(resultado => {
			res.json(resultado);
		}).catch(erro => {
			console.error(erro);
			res.status(500).send(erro.message);
		});

});

/* Mostra qual artista o usuário mais ouviu */
router.post('/mostrarArtistaMaisOuvido/:vt_fkUsuario', function (req, res, next) {
	var vt_fkUsuario = req.params.vt_fkUsuario;
	console.log('Artistas mais ouvidos funcionou');

	let instrucaoSql = `select artista from vezesOuvida join musica on 
	fkMusica = idMusica where fkUsuario = '${vt_fkUsuario}' order by vezesOuvida desc`;
	console.log(instrucaoSql);

	sequelize.query(instrucaoSql, {
			type: sequelize.QueryTypes.SELECT
		})
		.then(resultado => {
			res.json(resultado);
		}).catch(erro => {
			console.error(erro);
			res.status(500).send(erro.message);
		});

});

/* Muda a Playlist */
router.post('/mudarPlaylist/:musica_escolhida_0/:musica_escolhida_1/:musica_escolhida_2/:musica_escolhida_3/:musica_escolhida_4/:musica_escolhida_5/:musica_escolhida_6/:musica_escolhida_7/:vt_fkUsuario', function (req, res, next) {
	var vt_fkUsuario = req.params.vt_fkUsuario;
	var musica_escolhida_0 = req.params.musica_escolhida_0;
	var musica_escolhida_1 = req.params.musica_escolhida_1;
	var musica_escolhida_2 = req.params.musica_escolhida_2;
	var musica_escolhida_3 = req.params.musica_escolhida_3;
	var musica_escolhida_4 = req.params.musica_escolhida_4;
	var musica_escolhida_5 = req.params.musica_escolhida_5;
	var musica_escolhida_6 = req.params.musica_escolhida_6;
	var musica_escolhida_7 = req.params.musica_escolhida_7;

	let instrucaoSql = `delete from playlist where fkUsuario='${vt_fkUsuario}'`;
	console.log(instrucaoSql);

	sequelize.query(instrucaoSql, {
		model: playlist
	})

	vt_musicas_enviadas = [`insert into playlist values ('Minha Playlist', ${musica_escolhida_0}, ${vt_fkUsuario})`,
		`insert into playlist values ('Minha Playlist', ${musica_escolhida_1}, ${vt_fkUsuario})`,
		`insert into playlist values ('Minha Playlist', ${musica_escolhida_2}, ${vt_fkUsuario})`,
		`insert into playlist values ('Minha Playlist', ${musica_escolhida_3}, ${vt_fkUsuario})`,
		`insert into playlist values ('Minha Playlist', ${musica_escolhida_4}, ${vt_fkUsuario})`,
		`insert into playlist values ('Minha Playlist', ${musica_escolhida_5}, ${vt_fkUsuario})`,
		`insert into playlist values ('Minha Playlist', ${musica_escolhida_6}, ${vt_fkUsuario})`,
		`insert into playlist values ('Minha Playlist', ${musica_escolhida_7}, ${vt_fkUsuario})`
	]

	for (let index = 0; index < 8; index++) {

		sequelize.query(vt_musicas_enviadas[index], {
			type: sequelize.QueryTypes.INSERT
		});

	}

});

/* Muda os nomes das músicas na Playlist */
router.get('/mudarNomesPlaylist/:vt_fkUsuario', function (req, res, next) {
	var vt_fkUsuario = req.params.vt_fkUsuario;

	let instrucaoSql = `select fkMusica from playlist where fkUsuario = '${vt_fkUsuario}'`;
	console.log(instrucaoSql);

	sequelize.query(instrucaoSql, {
			type: sequelize.QueryTypes.SELECT
		})
		.then(resultado => {
			res.json(resultado);
		}).catch(erro => {
			console.error(erro);
			res.status(500).send(erro.message);
		});

});

module.exports = router;