//Destructurar arreglos

//Ejemplo de objetos
const producto = {
	nombre: "Monitor 20 pulgadas",
	precio: 300,
	disponible: true,
};
console.log(producto);

const { nombre, precio } = producto;
console.log(nombre);
console.log(precio);

//Con arreglos
const numbers = [10, 20, 30, 40, 50];

//Obtenemos los 3 primeros elementos
const [first, second, third] = numbers;
console.log(first);
console.log(second);
console.log(third);

//Obtenemos un elemento deseado, agregamos las comas de los elementos anteriores, sin agregar variables, basicamente estan vacios y colocamos la variable en la posicion que deseamos

const [, , , fourth] = numbers;

console.log(fourth);

//Creamos primero y segundo como variable y apartir de tercero, copia en un array los elementos restantes
const [primero, segundo, ...tercero] = numbers;
console.log(primero);
console.log(segundo);
console.log(tercero);
