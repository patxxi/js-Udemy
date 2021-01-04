//for each

const toDo = ["Tarea", "Comer", "Proyecto", "Estudiar JavaScript"];

//El for each regresa cada elemento del array y lo pasa como parametro a la funcion anonima (en este caso una arrow function) para ejecutar el codigo de dicha funcion, ademas no solo regresa cada elemento del array sino que ademas puede regresar los indices

toDo.forEach((element, index) => console.log(element, index));

const shoppCart = [
	{ name: "Monitor 27 pulgadas", price: 500 },
	{ name: "Televisor", price: 100 },
	{ name: "Tablet", price: 200 },
	{ name: "Audifonos", price: 300 },
	{ name: "Teclado", price: 400 },
	{ name: "Celular", price: 700 },
];

shoppCart.forEach((element, index) => console.log(element, index));

//Metodo map, sin embargo el map crea un arreglo nuevo

let newCart = shoppCart.map((element) => element);
console.log(newCart);
