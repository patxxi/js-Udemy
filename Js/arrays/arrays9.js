//metodo For each

const shoppCart = [
	{ name: "Monitor 27 pulgadas", price: 500 },
	{ name: "Televisor", price: 100 },
	{ name: "Tablet", price: 200 },
	{ name: "Audifonos", price: 300 },
	{ name: "Teclado", price: 400 },
	{ name: "Celular", price: 700 },
];

//Ciclo for normal

for (i = 0; i < shoppCart.length; i++) {
	let item = shoppCart[i];
	let { name, price } = item;
	console.log(`${name} -- ${price}`);
}

//Metodo for each

console.log(" ");
console.log("Metodo for each");
console.log(" ");

//for each itera cada elemento del array y devuelve su valor, seguido de eso declaramos una funcion que recibe como parametro, el valor retornado de cada iteracion del for each, de ahi trabajamos la funcion de manera normal

shoppCart.forEach(function (item) {
	let { name, price } = item;
	console.log(`${name} -- ${price}`);
});
