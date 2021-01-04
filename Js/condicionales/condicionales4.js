//Operador ternario

const autenticado = true;
const puedePagar = false;

//autenticado seria condicion, ? el operador, primer parametro si es true : parametro en false
console.log(autenticado ? "Si esta autenticado" : "No está autenticado");

console.log(autenticado && puedePagar ? "Si puede pagar" : "No puede pagar");

console.log(autenticado || puedePagar ? "Si puede pagar" : "No puede pagar");
