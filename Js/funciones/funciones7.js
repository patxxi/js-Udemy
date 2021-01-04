//Comunicacioon entre funciones

function init() {
	console.log("Iniciando app...");

	secondFunc();
}

function secondFunc() {
	console.log("Desde la segunda funcion...");
	userAuntent("Francisco");
}

function userAuntent(user) {
	console.log("Autenticando usuario....espere....");
	console.log(`Usuario autenticado....${user}`);
}
init();
