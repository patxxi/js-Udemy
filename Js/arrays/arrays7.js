//Eliminar elementos de un array

const carrito = []; //Arreglo vacio

console.table(carrito);

function Product(name, price) {
	this.name = name;
	this.price = price;
}

Product1 = new Product("Televisor 32 pulgadas", 400);
Product2 = new Product("Iphone 11", 800);
Product3 = new Product("Teclado", 120);
Product4 = new Product("Celular 2", 300);
carrito.push(Product1);
carrito.push(Product2);
carrito.push(Product4);
carrito.unshift(Product3);

console.table(carrito);

//Eliminar elemento
carrito.pop(); //Elimina el ultimo elemento del arreglo

console.table(carrito);

//Eliminar del inicio del carrito
carrito.shift();
console.table(carrito);

//Eliminar por pedazos o elementos especificos

carrito.splice(1, 1); //Posicion inicial de elementos a eliminar , posicion final (En este caso elimina un unico elemento)
console.table(carrito);
