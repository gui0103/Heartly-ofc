CREATE DATABASE heartly;
USE heartly;

CREATE TABLE usuario (
idUsuario INT PRIMARY KEY NOT NULL  AUTO_INCREMENT,
login VARCHAR(100) NOT NULL,
email VARCHAR(100) NOT NULL,
senha VARCHAR(45) NOT NULL 
) AUTO_INCREMENT  = 0; 

CREATE TABLE musica (
idMusica INT PRIMARY KEY NOT NULL AUTO_INCREMENT,
titulo VARCHAR(50) NOT NULL,
vezesOuvidaGeral INT NOT NULL,
artista VARCHAR(50) NOT NULL
) AUTO_INCREMENT  = 0;

CREATE TABLE vezesOuvida (
fkMusica INT NOT NULL,
fkUsuario INT NOT NULL,
vezesOuvida INT NOT NULL,
FOREIGN KEY (fkMusica) REFERENCES musica (idMusica),
FOREIGN KEY (fkUsuario) REFERENCES usuario (idUsuario)
); 

CREATE TABLE playlist (
nomePlaylist VARCHAR(50) NOT NULL,
fkMusica INT NOT NULL,
fkUsuario INT NOT NULL,
FOREIGN KEY (fkMusica) REFERENCES musica (idMusica),
FOREIGN KEY (fkUsuario) REFERENCES usuario (idUsuario)
); 

select * from usuario;
select * from musica;
select * from vezesOuvida;
select * from playlist;

select sum(vezesOuvida) as soma from vezesOuvida where fkUsuario= 1;

select vezesOuvida from vezesOuvida where fkUsuario=1  order by vezesOuvida desc;

select vezesOuvida, titulo from vezesOuvida join musica on 
	fkMusica = idMusica where fkUsuario = 1 order by vezesOuvida desc;
    
select login from usuario;

insert into musica (titulo, vezesOuvidaGeral, artista)
values ('CASTLE ON THE HILL',  0, 'Ed Sheeran'), ('DIVE',  0, 'Ed Sheeran'), ('GALWAY GIRL',  0, 'Ed Sheeran'), ('NANCY MULLIGAN',  0, 'Ed Sheeran'),
 ('NEW MAN',  0, 'Ed Sheeran'), ('PERFECT',  0, 'Ed Sheeran'), ('SHAPE OF YOU',  0, 'Ed Sheeran'), ('SUPERMARKET FLOWERS',  0, 'Ed Sheeran'),
 
('FINE LINE',  0, 'Harry Styles'), ('GOLDEN',  0, 'Harry Styles'), ('LIGHTS UP',  0, 'Harry Styles'), ('SHE',  0, 'Harry Styles'),
 ('TO BE SO LONELY',  0, 'Harry Styles'), ('ADORE YOU',  0, 'Harry Styles'), ('WATERMELON SUGAR',  0, 'Harry Styles'), ('FALLING',  0, 'Harry Styles'),
 
 ('PAINKILLER',  0, 'Ruel'), ('COURAGE',  0, 'Ruel'), ('DAZED & CONFUSED',  0, 'Ruel'), ('DISTANCE',  0, 'Ruel'),
 ('FREE TIME',  0, 'Ruel'), ('REAL THING',  0, 'Ruel'), ('SAY',  0, 'Ruel'), ('UP TO SOMETHING',  0, 'Ruel'),
 
 ('WHY',  0, 'Shawn Mendes'), ('IN MY BLOOD',  0, 'Shawn Mendes'), ('MUTUAL',  0, 'Shawn Mendes'), ('NERVOUS',  0, 'Shawn Mendes'),
 ('WHERE WERE YOU IN THE MORNING',  0, 'Shawn Mendes'), ("WHEN YOU'RE READY",  0, 'Shawn Mendes'), ("FALLIN' ALL IN YOU",  0, 'Shawn Mendes'), ('PERFECLY WRONG',  0, 'Shawn Mendes'),
 
  ('ALWAYS BEEN YOU',  0, 'Shawn Mendes'), ('DREAM',  0, 'Shawn Mendes'), ('LOOK UP AT THE STARS',  0, 'Shawn Mendes'), ('SONG FOR NO ONE',  0, 'Shawn Mendes'),
 ('WONDER',  0, 'Shawn Mendes'), ('MONSTER',  0, 'Shawn Mendes'), ('HIGHER',  0, 'Shawn Mendes'), ('TEACH ME HOW TO LOVE',  0, 'Shawn Mendes'),
 
 ('CORNELIA STREET',  0, 'Taylor Swift'), ('LOVER REMIX',  0, 'Taylor Swift'), ('WILDEST DREAMS',  0, 'Taylor Swift'), ('BLANK SPACE',  0, 'Taylor Swift'),
 ('I KNEW YOU WERE TROUBLE',  0, 'Taylor Swift'), ('STYLE',  0, 'Taylor Swift'), ('THE MAN',  0, 'Taylor Swift'), ('AFTERGLOW',  0, 'Taylor Swift'),
 
  ('...READY FOR IT',  0, 'Taylor Swift'), ('LOOK WHAT YOU MADE ME DO',  0, 'Taylor Swift'), ('I DID SOMETHING BAD',  0, 'Taylor Swift'), ("DON'T BLAME",  0, 'Taylor Swift'),
 ('DRESS',  0, 'Taylor Swift'), ("WHY WE CAN'T HAVE NICE THINGS",  0, 'Taylor Swift'), ('DELICATE',  0, 'Taylor Swift'), ('GETAWAY CAR',  0, 'Taylor Swift'),
 
 ('BUTTERFLY EFFECT',  0, 'Travis Scott'), ('GOOSEBUMPS',  0, 'Travis Scott'), ('HIGHEST IN THE ROOM',  0, 'Travis Scott'), ('SICKO MODE',  0, 'Travis Scott'),
 ('STARGAZING',  0, 'Travis Scott'), ('ASTROTHUNDER',  0, 'Travis Scott'), ("CAN'T SAY",  0, 'Travis Scott'), ('YOSEMITE',  0, 'Travis Scott'),
 
  ('NUMB',  0, 'Linkin Park'), ("WHAT I'VE DONE",  0, 'Linkin Park'), ("I'M SO SORRY",  0, 'Imagine Dragons'), ('KIWI',  0, 'Harry Styles'),
 ('ONLY ANGEL',  0, 'Harry Styles'), ('SIGN OF THE TIMES',  0, 'Harry Styles');





