//Agregar mas propiedades al objeto
const producto = {
	nombre: "Monitor 20 pulgadas",
	precio: 300,
	disponible: true,
};
console.log(producto);

//asi agregamos nueva propiedad
producto.imagen = "Imagen.jpg";
console.log(producto);

//Eliminamos un atributo o propiedad del objeto
delete producto.disponible;
console.log(producto);
