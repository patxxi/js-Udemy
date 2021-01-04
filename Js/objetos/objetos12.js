//Object keys y demas funciones objects
const producto = {
	nombre: "Monitor 20 pulgadas",
	precio: 300,
	disponible: true,
};
console.log(Object.keys(producto)); //Devuelve las llaves del objeto
console.log(Object.values(producto)); //Devuelve los valores del objeto
console.log(Object.entries(producto)); //Te retorna ambos, pero separadas en arrays
