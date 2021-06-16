const precios = [3000, 99.99, 78.56, 5200, 12000, 6.50];

/*default sort array method: convierte todo 
en strings y lo ordena segun orden de caracter. 
no funciona para ordenar números*/
//precios.sort();
//sort modifica el array original. todas las variables
//van a quedar apuntando a la variable que se ordena
//por eso se puede agregar el metodo slice para 
//obtener una nueva versión.

//ordenar ascendente
const ascendente = precios.slice().sort((a, b) => a - b);

//ordenar descendente
const descendente = precios.slice().sort((a, b) => b - a);

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

//ordeno de mayor a menor por rating
books.sort((a, b) => b.rating - a.rating)



