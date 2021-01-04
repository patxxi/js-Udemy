//JavaScript posee distintos tipos de datos que permiten tener distinttos tipos de uso, en el caso de js no es necesario declarar que tipo de dato se guardaran, los tipos primitivos son:

//String:
let cadenaDeTexto = "Hola mundo";
const constanteDeTexto = "Hola mundo";

//int:
let entero = 12;
const EDAD = 19;

//floats:
let flotante = 12.45;
const PI = 3.14;

//Boolean:
const VERDADERO = true;
const FALSO = false;

//javaScript tambien tiene el tipo de dato "undefined" es basicamente cuando una variable esta creada pero no posee ningun valor asociado:
let indefinido;

//El valor null, es parecido a undefinied pero no es lo misom, null es un objeto y es "vacio" mientras que undefenied es que directamente no tiene valor alguno
let nulo = null;

//Arreglos (que se tratan como objetos):
let arreglo = [1, 2, 3, 4];

//Objetos
let objeto = {
	nombre: "Francisco",
	profesion: "Estudiante",
};

console.log(typeof cadenaDeTexto);
console.log(typeof entero);
console.log(typeof flotante);
console.log(typeof VERDADERO);
console.log(typeof indefinido);
console.log(typeof nulo);
console.log(typeof arreglo);
console.log(typeof objeto);
