//Manera imperativa de hacerla mediante metodos push y unshift, agregar elementos a un array

const carrito = []; //Arreglo vacio

console.table(carrito);

function Product(name, price) {
	this.name = name;
	this.price = price;
}

Product1 = new Product("Televisor 32 pulgadas", 400);
Product2 = new Product("Iphone 11", 800);
Product3 = new Product("Teclado", 120);

//Push agrega al final del carrito el elemento
carrito.push(Product1);
carrito.push(Product2);
//Unshift agrega al principio del elemento
carrito.unshift(Product3);

console.table(carrito);
