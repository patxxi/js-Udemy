//Destructurar objetos
const producto = {
	nombre: "Monitor 20 pulgadas",
	precio: 300,
	disponible: true,
};
console.log(producto);

//Manera de deconstruir un objeto, te crea el objeto con el nombre del atributo  te agega el valor
//Forma 1

//const { nombre } = producto;
//const { precio } = producto;

const { nombre, precio } = producto;
console.log(nombre);
console.log(precio);
