//Diferencia entre declarar funciones

sumar();
function sumar() {
	console.log(2 + 2);
}

//function expression

//Esto soltará error, por como Js lee el codigo, temas de hoisting, primero lee las funciones y luego las variables y las call de las funciones,

//En este caso, aunque sumar3 se comporte como funcion, esta declarada como una constante, por lo tanto, no se lee en la primera pasada sino en la segunda, por lo cual cuando se llama, esta actua como si no existiera

sumar3();
const sumar3 = function () {
	console.log(3 + 3);
};
