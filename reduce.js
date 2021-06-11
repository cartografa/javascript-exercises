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

//implicit return usando math.max:
const topScore2 = notas.reduce((max, valorActual) => (
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


//reduce for tallying

//ejemplo: contar votos
const votos = ['sí', 'sí', 'no', 'sí', 'no', 'sí', 'sí', 'sí', 'no', 'no', 'sí', 'sí', 'sí', 'no', 'sí', 'no', 'sí', 'sí', 'no'];

/* const resultados = votos.reduce((tally, value) => {
    if(tally[value]) {
        tally[value]++;
    } else {
        tally[value] = 1;
    }
    return tally;
    }, {})  */

const resultados = votos.reduce((tally, value) => {
    tally[value] = (tally[value] || 0) + 1;
    // si existe suma 1 al valor, si está undefined
    // o sea: 0, suma 1 también.
    return tally;
}, {})

//agrupar libros por rating:
let books = [{
    title: 'En medio de Spinoza', 
    authors: ['Gilles Deleuze'],
    rating: 4.65
},
{
    title:  'La mano izquierda de la oscuridad',
    authors: ['Ursula K. Le Guin'],
    rating: 4.89
},
{
    title: 'Mil Mesetas',
    authors: ['Gilles Deleuze', 'Felix Guattari'],
    rating: 4.8
},
{
    title:  'Curso sobre la percepción',
    authors: ['Gilbert Simondon'],
    rating: 3.5
}
]

const groupedByRatings = books.reduce((groupedBooks, book) => {
    const key = Math.floor(book.rating);
    if (!groupedBooks[key]) groupedBooks[key] = [];
    groupedBooks[key].push(book)
    return groupedBooks
}, {})




