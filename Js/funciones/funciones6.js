//Parametros por default

function saludo(nombre = "User", apellido = "No tiene apellido") {
	//Se le asigna un valor por defecto, en caso de que si se les pase un valor de argumento al llamar la funcion, este valor se sustituira

	console.log(`Hola ${nombre} ${apellido}`);
}

saludo("Francisco", "Ruiz");
saludo("Edkar");
saludo();
