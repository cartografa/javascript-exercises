let libros = [
    "historia general del arte",
    "teoría del arte moderno",
    "escritos y consideraciones sobre el arte",
    "arte y percepción"
]

// IMPORTANTE: solo devuelve el primer match
const libro = libros.find(libro => {
    return libro.includes('arte');
});

// devuelve donde arte aparece al principio
const libro2 = libros.find(l => (
    l.indexOf("arte") === 0
))

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

const goodBook = books.find(b => b.rating > 4.8)
