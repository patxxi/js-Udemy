//Congelar un objeto para que no se pueda modificar

"use strict"; //El mnodo estricto hace que se deban seguir reglas al escribir js, a su vez, lo vuelve mas "fuerte" en su tipado

const producto = {
	nombre: "Monitor 20 pulgadas",
	precio: 300,
	disponible: true,
};

//Usando el modo estricto, podemos acceder a funciones Object, en el caso de freeze, hace que no se pueda re asignar ningun atributo del objeto indicado

Object.freeze(producto);

console.log(Object.isFrozen(producto)); //Indica si esta congelado el objeto
console.log(producto);
producto.nombre = "Panasonic"; //Soltará error, tampoco deja eliminar o agregar propiedades
