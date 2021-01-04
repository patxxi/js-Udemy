//Metodos dentro de un objeto
"use strict";

const musicPlayer = {
	play: function (id) {
		console.log(`Reproduciendo cancion con el id ${id}...`);
	},
	stop: function () {
		console.log("Pausando...");
	},
	createPlaylist: function (name) {
		console.log(`Creando a playlist ${name}`);
	},
};

musicPlayer.play(30);
musicPlayer.stop();

musicPlayer.delete = function (id) {
	console.log(`Eliminando cancion con el id ${id}`);
}; //Podemos agregar nuevos metodos del objeto fuera de la creacion de este

musicPlayer.delete(30);
musicPlayer.createPlaylist("Rock");
