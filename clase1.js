console.log('JavaScript Avanzado - Clase 1')

/* ---------------------------------------------------------- */
/* Nuevos contructores de variables con ES6 (ECMAScript 2015) */
/* ---------------------------------------------------------- */

// console.log('/*\n/ JS5 - var */')

// var numero = 5;
// var numero = 6;
// console.log(numero);

// for (var i=0; i<5; i++) {
//     console.log(i);
// }
// console.log(i);

/* ---------------------------------------------------------- */

console.log('/*\n/ ES6 - let / const */')

let numero = 5;
numero = 6;
console.log(numero);

const PI = 3.1415;
// PI = 2.71 (¡error!)
console.log(PI)

for(let i=0; i<5; i++) {
    console.log(i)
}
// console.log(i) (¡error! i no está definido)

/* --------------------------------------------- */
console.log('/* Var en bloque de código anónimo */')
/* --------------------------------------------- */

{
    var a = 5;
    console.log(a)
}
console.log(a) //scope global


/* ------------------------------------------------ */
console.log('/* Var en bloque de código condicional */')
/* ------------------------------------------------ */

if (true) {
    var b = 5
    console.log(b)
}
console.log(b) //scope global

/* --------------------------------------------- */
console.log('/* Var en bloque de código funcional */')
/* --------------------------------------------- */

function foo() {
    var c = 7
    console.log(c)
}
foo()
// console.log(c) // ¡error! var tiene scope dentro de la función

/* --------------------------------------------- */
console.log('/* Let en bloque de código anónimo */')
/* --------------------------------------------- */

{
    let a = 5;
    console.log(a)
}
// console.log(a) // ¡error!


/* ------------------------------------------------ */
console.log('/* Let en bloque de código condicional */')
/* ------------------------------------------------ */

if (true) {
    let b = 5
    console.log(b)
}
// console.log(b) // ¡error!

/* ------------------------------------------------ */
console.log('/* Let en bloque de código funcional */')
/* ------------------------------------------------ */

function foo() {
    let c = 7
    console.log(c)
}
foo()
// console.log(c) // ¡error!

/* ---------------------------------------------------------- */
/* Nuevos contructores de funciones con ES6 (ECMAScript 2015) */
/* ---------------------------------------------------------- */

// console.log('\n/* JS5 - funciones')

// function sumar(a, b) {
//     return a + b;
// }

// let suma = sumar(5, 6);
// console.log(suma);
// console.log(sumar(5, 6))
// console.log(sumar(5, sumar(6, sumar(7, 8)))) // corre de adentro hacia afuera

console.log('\n/* ES6 - arrow functions / funciones flecha / expresiones lambda ')

// uso de const para almacenar variables y evitar que 
// pueda cambiar su contenido

// const sumar = function(a, b) {
//     return a + b;
// }

// const sumar = (a, b) => {
//     return a + b;
// }

const sumar = (a, b) => a + b; // return implícito

console.log(sumar(5, 6));

 let n1 = 6, n2 = 7; // declaración en línea

 let suma = n1 + n2;
 console.log(`La suma de ${n1} más ${n2} es ${suma}`) // con template literal


//  const dobleDe = (a) => 2*a;
 const dobleDe = a => 2 * a;
 console.log(`El doble de ${n1} es ${dobleDe(n1)}`); // con template literal

const printSaludo = () => console.log('Hola!');
printSaludo();

const sumar2Mult = (a, b, m) => {
    let s = a + b;
    return s * m;
}

console.log(`La suma de ${n1} + ${n2} multiplicado por 8 es ${sumar2Mult(n1, n2, 8)}`)

// const getPersona = () => {
//    return {nombre: 'Juan', edad: 23}
// }
const getPersona = () => ({nombre: 'Juan', edad: 23}); // se rodea al objeto de paréntesis para que no se confunda con llaves de funcion
console.log(getPersona);

/* ---------------------------------------------------------- */
/*        Variables, funciones y tipos de datos en JS         */
/* ---------------------------------------------------------- */

console.log('1) tipo de dato: number, string, boolean -> tipo primitivo -> copia es X valor')

// ------> Variables
// var nombre = 'Juan';
// console.log(nombre, typeof nombre);
// var nombreBackup = nombre;
// nombre = 'Pedro';
// console.log(nombre);
// console.log(nombreBackup);

// // ------> Funciones
// function agregarApellidoAlNombreEImprimir (nombre, apellido) {
//     nombre = nombre + ' ' + apellido;
//     console.log(nombre)
// }

// var nombre2 = 'Ana';
// console.log(nombre2);
// agregarApellidoAlNombreEImprimir(nombre2, 'López');
// console.log(nombre2);

console.log('2) tipo de dato: array, object, function -> tipo objeto -> copia es X referencia')


// ------> Variables
var nombre = ['Juan'];
console.log(nombre, typeof nombre);
var nombreBackup = nombre; // es solo una referencia, no puede funcionar como backup
nombre[0] = 'Pedro';
console.log(nombre);
console.log(nombreBackup);

// ------> Funciones

function agregarApellidoAlNombreEImprimir (nombre, apellido) {
    nombre[0] = nombre + ' ' + apellido;
    console.log(nombre)
} 

var nombre2 = ['Ana'];
console.log(nombre2);
agregarApellidoAlNombreEImprimir(nombre2, 'López');
console.log(nombre2);

/* ---------------------------------------------------------- */
/*             BOM : Browser Object Model -> window           */
/*           DOM : Document Object Model -> document          */
/* ---------------------------------------------------------- */

console.log('\n//Acceso al BOM')
console.log(window.innerWidth)
console.log(innerHeight)
console.log(window.outerWidth)
console.log(outerWidth)

/* ---------------------------------------------------------- */

console.log('\n//Acceso al DOM')
console.log(window.document.getElementById('titulo'))
console.log(document.getElementById('titulo'))

console.log(document.getElementsByTagName('h1'))

console.log(document.getElementsByClassName('subtitulo')[0])

/* ---------------------------------------------------------- */

console.log('\n//Acceso al DOM con query selector')
console.log(document.querySelector('#titulo'))

console.log(document.querySelector('h1'))

console.log(document.querySelector('.subtitulo')) //solo al primero
console.log(document.querySelectorAll('.subtitulo')) //todos


var p = document.createElement('p');
p.innerText = 'Lorem Ipsum'

var body = document.getElementsByTagName('body')[0];
console.log(body);

let refP = document.getElementsByTagName('p')[0];
refP.style.color = 'cyan';
refP.style.backgroundColor = 'blue';