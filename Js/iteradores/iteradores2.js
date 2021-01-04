//Break y continue

console.log("Primer ciclo");
for (let i = 0; i <= 10; i++) {
	if (i == 5) {
		break; //Rompe el loop en el que esta
	}
	console.log(`Indice ${i}`);
}

console.log("Segundo ciclo");
for (let i = 0; i <= 10; i++) {
	if (i == 5) {
		console.log("Cinco");
		continue;
	}
	console.log(`Indice ${i}`);
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
	if (shoppCart[i].name === "Tablet") {
		console.log(`El producto ${shoppCart[i].name} tiene un descuento`);
		continue;
	}
	console.log(shoppCart[i]);
}
