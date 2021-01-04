//Sellar un objeto

"use strict";
const producto = {
	nombre: "Monitor 20 pulgadas",
	precio: 300,
	disponible: true,
};
//Seal permite modificar los valores existentes, re asignar los valores, pero no permite eliminar o crear nuevas propiedades
Object.seal(producto);

producto.precio = 200;

console.log(producto);
