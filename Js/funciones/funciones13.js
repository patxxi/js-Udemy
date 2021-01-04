"use strict";

const musicPlayer = {
	play: (id) => console.log(`Reproduciendo cancion con el id ${id}...`),

	stop: () => console.log("Pausando..."),

	createPlaylist: (name) => console.log(`Creando a playlist ${name}`),
};

musicPlayer.play(30);
musicPlayer.stop();

musicPlayer.delete = (id) => console.log(`Eliminando cancion con el id ${id}`);
musicPlayer.delete(30);
musicPlayer.createPlaylist("Rock");
