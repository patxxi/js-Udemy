//Acceder a valores de un objeto
const producto = {
	nombre: "Monitor 20 pulgadas",
	precio: 300,
	disponible: true,
};
console.log(producto);

//Forma uno, mas recomendada
console.log(producto.nombre);
//Forma dos
console.log(producto["precio"]);
