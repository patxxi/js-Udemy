//Uso del return y funciones que devuelven valores

function summ(a, b) {
	return a + b;
}

const result = summ(2, 2);

let total = 0;

function addCar(price) {
	return (total += price);
}

function addTax(total) {
	return total * 1.15;
}

total = addCar(300);
total = addCar(400);
total = addCar(600);
total = addCar(100);
const totalPrice = addTax(total);
console.log(totalPrice);
