//Ciclo for

for (let i = 0; i < 10; i++) {
	console.log(`Indice: ${i}`);
}

for (let i = 0; i <= 20; i++) {
	console.log(`Numero: ${i} ${i % 2 == 0 ? "Es par" : "Es impar"}`);
}

const shoppCart = [
	{ name: "Monitor 27 pulgadas", price: 500 },
	{ name: "Televisor", price: 100 },
	{ name: "Tablet", price: 200 },
	{ name: "Audifonos", price: 300 },
	{ name: "Teclado", price: 400 },
	{ name: "Celular", price: 700 },
];

for (let i = 0; i < shoppCart.length; i++) {
	console.log(shoppCart[i]);
}
