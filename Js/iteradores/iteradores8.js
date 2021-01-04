//Ciclo for in

const automovil = {
	model: "Camaro",
	year: 1969,
	motor: "6.0",
};

//El for in te permite iterar las llaves de los objetos en Js (o diccionarios como seria en python)
for (let attr in automovil) {
	console.log(attr);
}

//De esta manera, podemos iterar tanto llaves como valores

for (let [key, value] of Object.entries(automovil)) {
	console.log(key, value);
}
