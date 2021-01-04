const numero1 = "50",
	numero2 = 10,
	numero3 = "tres";

console.log(numero1 + numero2); //Al suamr numeros y strings, lo que intentara hacer js es concadenarlos, por ello es necesario convertir datos

console.log(Number(numero1) + numero2); //De esta manera convertimos a numero1 en un dato de tipo "number" y sumamos de manera normal con numero2

console.log(numero1 - numero2); //Tener en cuenta que, en el caso de la resta, aunque sean un string y un numero, la resta si la efectuara correctamente, shits of javaScript my friend

console.log(typeof numero1);
console.log(parseInt(numero1));
//De esta forma parseamos un tipo de dato a otro, de la misma manera podemos utilizar esto para guardar dihco valor, pero en forma de number (u otro tipo segun necesitemos) en otra variable o en la misma si se desea:2

let dato;
dato = Number("20");
dato = Number("20.1031");
dato = Number(true);
dato = Number(false);
dato = parseInt("20.20"); //Regresa el numero sin su decimal
console.log(dato);
dato = parseFloat("20.20"); //Regresa el numero con su decimal
console.log(dato);

dato = 123123123.20123123;
console.log(dato.toFixed(3)); //Redondea a decimales
