//Metodo map

const shoppCart = [
	{ name: "Monitor 27 pulgadas", price: 500 },
	{ name: "Televisor", price: 100 },
	{ name: "Tablet", price: 200 },
	{ name: "Audifonos", price: 300 },
	{ name: "Teclado", price: 400 },
	{ name: "Celular", price: 700 },
];

//La diferencia entre .map y foreach, es que for each recorre el array y devuelve a la funcion el valor de cada posicion

//En cambio map, si bien recorre de igual manera el array de la misma forma, map retorna un nuevo array sin modificar el original

shoppCart.forEach(function (item) {
	let { name, price } = item;
	console.log(`${name} -- ${price}`);
});

shoppCart2 = shoppCart.map(function (item) {
	//Con esta funcion, le indicamos a map, pasandole de parametro cada item del array, como devolvernos el nuevo array
	let { name, price } = item;
	if (price > 300) {
		return name;
	}
});
console.log(shoppCart2);
