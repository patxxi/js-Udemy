//For...of

const toDo = ["Tarea", "Comer", "Proyecto", "Estudiar JavaScript"];

const shoppCart = [
	{ name: "Monitor 27 pulgadas", price: 500 },
	{ name: "Televisor", price: 100 },
	{ name: "Tablet", price: 200 },
	{ name: "Audifonos", price: 300 },
	{ name: "Teclado", price: 400 },
	{ name: "Celular", price: 700 },
];

//Este es un ciclo for each tipico de Java, pendiente tomara el valor de cada elemento de toDo en cada iteracion
for (let pendiente of toDo) {
	console.log(pendiente);
}

for (let item of shoppCart) {
	console.log(item);
}
