//Modificar y elementos de un array

const meses = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio"];

//Se pueden modificar los valores de un array anque sean constantes

meses[0] = "Nuevo mes"; //Esto modifica el valor de meses en la posicion 0
meses[10] = "Nuevo mes 2"; //Crea una nueva entrada al final del array, los espacios de por medio quedan en blanco

console.table(meses);
