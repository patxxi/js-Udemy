//Arrow functions parte 2

const learning1 = function () {
	console.log("Aprendiendo JavaScript");
};

const learning2 = (name = "nuevo curso") => `Aprendiendo ${name}`; //Estructura de arrow function

console.log(learning2("JavaScript"));
