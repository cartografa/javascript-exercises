/* REDUCE: executes a reducer function on each 
element of the array, resulting in a single
value. Needs a callback with at least two
parameters. 
The first one holds the value being reduced*/

//SUMMING AN ARRAY
const sum = [3, 5, 7, 9, 11].reduce((accumulator, currentValue) => {
    return accumulator + currentValue;
}) 

const nums = [3, 4, 5, 6, 7];
const product = nums.reduce((total, currentValue) => {
    return total * currentValue;
})

let notas = [1, 3, 10, 6, 7, 7, 8];
const topScore = notas.reduce((max, valorActual) => {
    if (valorActual > max) return valorActual;
    return max;
})
topScore;

//implicit return usando math.max:
const topScore = notas.reduce((max, valorActual) => (
    Math.max(max, valorActual)
))

const minScore = notas.reduce((min, valorActual) => (
    Math.min(min, valorActual)
))

//reduce con parámetro de inicio.
//la suma va a empezar en 1000.
const suma = [10, 20, 30].reduce((sum, valorActual) => {
    return sum + valorActual;
}, 1000) 