const numero1 = 20;
const numero2 = 50;
const numero3 = "20";

console.log(numero1 > numero2); //Comparador mayor que
console.log(numero1 < numero2); //comparador menor que
console.log(numero1 == numero3); //Comparador igual, no distingue entre string e int
console.log(numero1 === numero3); //Comparador igual,si distingue entre tipos de datos
console.log(2 != 3); //comparador de desigualdad

console.log("hola" == " hola"); //Comparar strings, debe ser importante sean estrictamente el mismo texto, es sensible a espacio

console.log("a" < "b"); //en abecedario compara el orden en el que aparecen, menor valor es A y mayor valor es z, importante temas de mayusculas y minusculas

console.log(null == undefined);
console.log(null === undefined);
//null y undefenied les ocurre lo mismo que strings y numeros, tienen o pueden tener el mismo valor, pero no son exactamente iguales
