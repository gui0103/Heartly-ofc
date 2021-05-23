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
vezesOuvidaGeral INT NOT NULL
) AUTO_INCREMENT  = 0;

CREATE TABLE vezesOuvida (
fkMusica INT NOT NULL,
fkUsuario INT NOT NULL,
vezesOuvida INT NOT NULL,
FOREIGN KEY (fkMusica) REFERENCES musica (idMusica),
FOREIGN KEY (fkUsuario) REFERENCES usuario (idUsuario)
); 

select * from usuario;
select * from musica;
select * from vezesOuvida;

insert into musica (titulo, vezesOuvidaGeral)
values ('CASTLE ON THE HILL',  0), ('DIVE',  0), ('GALWAY GIRL',  0), ('NANCY MULLIGAN',  0),
 ('NEW MAN',  0), ('PERFECT',  0), ('SHAPE OF YOU',  0), ('SUPERMARKET FLOWERS',  0);

insert into musica (titulo, vezesOuvidaGeral)
values ('FINE LINE',  0), ('GOLDEN',  0), ('LIGHTS UP',  0), ('SHE',  0),
 ('TO BE SO LONELY',  0), ('ADORE YOU',  0), ('WATERMELON SUGAR',  0), ('FALLING',  0),
 
 ('PAINKILLER',  0), ('COURAGE',  0), ('DAZED & CONFUSED',  0), ('DISTANCE',  0),
 ('FREE TIME',  0), ('REAL THING',  0), ('SAY',  0), ('UP TO SOMETHING',  0),
 
 ('WHY',  0), ('IN MY BLOOD',  0), ('MUTUAL',  0), ('NERVOUS',  0),
 ('WHERE WERE YOU IN THE MORNING',  0), ("WHEN YOU'RE READY",  0), ("FALLIN' ALL IN YOU",  0), ('PERFECLY WRONG',  0),
 
  ('ALWAYS BEEN YOU',  0), ('DREAM',  0), ('LOOK UP AT THE STARS',  0), ('SONG FOR NO ONE',  0),
 ('WONDER',  0), ('MONSTER',  0), ('HIGHER',  0), ('TEACH ME HOW TO LOVE',  0),
 
 ('CORNELIA STREET',  0), ('LOVER REMIX',  0), ('WILDEST DREAMS',  0), ('BLANK SPACE',  0),
 ('I KNEW YOU WERE TROUBLE',  0), ('STYLE',  0), ('THE MAN',  0), ('AFTERGLOW',  0),
 
  ('...READY FOR IT',  0), ('LOOK WHAT YOU MADE ME DO',  0), ('I DID SOMETHING BAD',  0), ("DON'T BLAME",  0),
 ('DRESS',  0), ("WHY WE CAN'T HAVE NICE THINGS",  0), ('DELICATE',  0), ('GETAWAY CAR',  0),
 
 ('BUTTERFLY EFFECT',  0), ('GOOSEBUMPS',  0), ('HIGHEST IN THE ROOM',  0), ('SICKO MODE',  0),
 ('STARGAZING',  0), ('ASTROTHUNDER',  0), ("CAN'T SAY",  0), ('YOSEMITE',  0),
 
  ('NUMB',  0), ("WHAT I'VE DONE",  0), ("I'M SO SORRY",  0), ('KIWI',  0),
 ('ONLY ANGEL',  0), ('SIGN OF THE TIMES',  0);





