const carrito = [];

console.table(carrito);

function Product(name, price) {
	this.name = name;
	this.price = price;
}

Product1 = new Product("Televisor 32 pulgadas", 400);
Product2 = new Product("Iphone 11", 800);
Product3 = new Product("Teclado", 120);

let result = [];

result = [...carrito, Product1]; //Forma declarativa de sumar elemetnos a un array, copia el array carritos, le agrega el Product1 y crea un nuevo array sin modificar el array original, esto es programacion funcional

result = [...result, Product2]; //Agrega al final del carrito
result = [Product3, ...result]; //Agrega al principio del array

console.table(result);
