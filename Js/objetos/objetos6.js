//Deconstruccion de objetos anidados
const producto = {
	nombre: "Monitor 20 pulgadas",
	precio: 300,
	disponible: true,
	informacion: {
		medidas: {
			peso: "1kg",
			medida: "1m",
		},
		fabricacion: {
			pais: "China",
		},
	},
};
console.log(producto);
//nombre = deconstruccion de objeto, informacion {fbaricacion} = deconstruccion de objetos anidados

const {
	nombre,
	informacion: { fabricacion },
} = producto;

console.log(nombre);

console.log(fabricacion);
//Tener en cuenta que, informacion,no existe sino que se esta sacando de ese objeto el atributo especificado
console.log(informacion);
