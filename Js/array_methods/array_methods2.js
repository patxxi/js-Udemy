//Find index
const months = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio"];

const shoppCart = [
	{ name: "Monitor 27 pulgadas", price: 500 },
	{ name: "Televisor", price: 100 },
	{ name: "Tablet", price: 200 },
	{ name: "Audifonos", price: 300 },
	{ name: "Teclado", price: 400 },
	{ name: "Celular", price: 700 },
];

//Encontrar indice de meses

//Le enviamos una arrow function, pasandole cada elemento del array por parametro y nos devuelve el indice cuando se cumpla la condicion
const index = months.findIndex((month) => month === "Diciembre"); //Retorna -1 en caso de no existir el elemento
console.log(index);

//Encontrar indice de un array de objetos

const index2 = shoppCart.findIndex((item) => item.price === 100);

console.log(index2);
