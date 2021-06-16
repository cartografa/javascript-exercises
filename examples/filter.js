const nums = [34, 35, 36, 37, 38, 39, 40];

const impares = nums.filter(n => n % 2 === 1)
const pares = nums.filter(n => n % 2 === 0)

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

const goodBooks = books.filter(b => b.rating > 4)

//búsqueda de algun titulo con "la" y rating
//mayor a 4.
const query = 'La';
const results = books.filter(b => {
    const title = b.title.toLowerCase();
    return title.includes(query.toLowerCase()) &&
    b.rating > 4
});
