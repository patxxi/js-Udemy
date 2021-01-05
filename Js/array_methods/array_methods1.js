const months = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio']

const shoppCart = [
    { name: 'Monitor 27 pulgadas', price: 500 },
    { name: 'Televisor', price: 100 },
    { name: 'Tablet', price: 200 },
    { name: 'Audifonos', price: 300 },
    { name: 'Teclado', price: 400 },
    { name: 'Celular', price: 700 },
]

// Comprobar si un valor existe
months.forEach((month) => console.log(month))

const result = months.includes('Diciembre') // Nos suelta un true o false si existe el elemento en el array, no sirve para objetos
console.log(result)

//Para objetos, esto itera cada objeto del arreglo y de ahi podemos acceder a sus llaves y valores. Entonces retornamos si true o false si dicho producto existe en el arreglo

const result2 = shoppCart.some((product) => product.name === 'peine')
console.log(result2)
