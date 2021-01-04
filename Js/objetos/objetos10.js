//Uso del this en objetos
const producto = {
	nombre: "Monitor 20 pulgadas",
	precio: 300,
	disponible: true,
	mostrarInfo: function () {
		console.log(
			//El this basicamente hace referencia al objeto dentro del cual esta definida la funcion
			`El producto: ${this.nombre} tiene un precio de: ${this.precio}`
		);
	},
};

producto.mostrarInfo();
