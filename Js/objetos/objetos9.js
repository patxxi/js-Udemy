//Combinar dos objetos

const producto = {
	nombre: "Monitor 20 pulgadas",
	precio: 300,
	disponible: true,
};

const medidas = {
	peso: "1kg",
	medida: "1m",
};

console.log(producto);
console.log(medidas);

//metodo uno

const resultado = Object.assign(producto, medidas); //Une ambos objetos en uno nuevo
console.log(resultado);

//Metodo dos, la anotacion de "..." es basicamente que copie dicho objeto o que mantenga los datos de dicho objeto (tambien funciona con arrays)

const resultado2 = { ...producto, ...medidas }; //Metodo mas usado
console.log(resultado2);
