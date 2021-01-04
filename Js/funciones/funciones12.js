//arrow funcionts 3
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

const array1 = shoppCart.forEach(
	(producto) => `${producto.name} ~ Precio: ${producto.price}`
);

const array2 = shoppCart.map(
	(producto) => `${producto.name} ~ Precio: ${producto.price}`
);
console.log(array1);
console.log(array2);
