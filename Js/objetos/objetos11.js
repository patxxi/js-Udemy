//Constructor Objects

//Objetc literal
const producto = {
	nombre: "Monitor 20 pulgadas",
	precio: 300,
	disponible: true,
};

//Object constructor

function Producto(nombre, precio) {
	this.nombre = nombre;
	this.precio = precio;
	this.disponible = true;
}

const producto2 = new Producto("Monitor 24 pulgadas", 400);
console.log(producto2);
