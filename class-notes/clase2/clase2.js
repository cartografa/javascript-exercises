console.log('JavaScript Avanzado - Clase 2')
console.log('Callbacks & Eventos')
console.log(document.querySelector('title').textContent)



/* ------------------------------------------------------- */
console.log('\n/* CALLBACKS */')
/* ------------------------------------------------------- */

let uno = () => {
    console.log('Soy la función 1')
}

let dos = () => {
    console.log('Soy la función 2')
}

uno()
dos()

console.log('--------------------------------')

function prueba(item, callback) {
    console.log(item)
    console.log(callback, typeof callback)

    // if(callback) callback()
    // else console.log('Prueba: callback no definido')

    if(typeof callback == 'function') callback()
    else console.log(`Prueba: el callback ${callback} no es una función`)
}

// Callback = función que se pasa por referencia y 
// es ejecutada por otra función.
prueba(1, uno)
prueba(2, dos)
prueba(3)


console.log('--------------------------------')

function prueba2(item, callback1, callback2) {
    console.log(item)

    if(typeof callback1 == 'function') callback1()
    else console.log(`Prueba: el callback ${callback1} no es una función`)

    if(typeof callback2 == 'function') callback2()
    else console.log(`Prueba: el callback ${callback2} no es una función`)
}

prueba2(4, uno, dos)

console.log('--------------------------------')

function operacion (a, b, callback) {
    if(!callback) return '*Operación no definida*'
    return callback(a, b)
}

const suma = (a, b) => a + b;
const resta = (a, b) => a - b;
const mult = (a, b) => a * b;
const div = (a, b) => a / b;

let num1 = 15;
let num2 = 7;

console.log(`Dados dos números ${num1} y ${num2}`)
console.log(`La suma es ${operacion(num1, num2, suma)}`)
console.log(`La resta es ${operacion(num1, num2, resta)}`)
console.log(`La multiplicación es ${operacion(num1, num2, mult)}`)
console.log(`La división es ${operacion(num1, num2, div)}`)
// Callback en linea:
console.log(`El módulo es ${operacion(num1, num2, (a,b) => a % b)}`)

console.log(`Sin pasar callback: ${operacion(num1, num2)}`)

/* ------------------------------------------------------- */
console.log('\n/* EVENTOS */')
/* ------------------------------------------------------- */

let btn = document.querySelector('#btn');

// no funciona porque onclick espera un callback:
// btn.onclick = console.log('Click') 

// function click() {
//     console.log('Click')
// }
// const click = function() {
//     console.log('Click')
// }
// const click = () => console.log('Click')

// btn.onclick = click;

/* ------------------------------------------------------- */
console.log('\n/* EVENTOS con múltiples callbacks */')
/* ------------------------------------------------------- */

/* FORMA 1 */
// btn.onclick = () => {
//     uno()
//     dos()
// }

/* FORMA 2 */
btn.addEventListener('click', uno)
btn.addEventListener('click', dos)
btn.addEventListener('click', function() {
    console.log('Soy otra función')
})
btn.addEventListener('click', () => console.log('Soy una función arrow'))

/* ------------------------------------------------------- */
console.log('\n/* Objeto Event (e) */')
/* ------------------------------------------------------- */

btn.addEventListener('click', e => {
    console.log(e)
})

/* ------------------------------------------------------- */
console.log('\n/* Propagación de Eventos BUBBLING & CAPTURING */')
/* ------------------------------------------------------- */

let UNO = document.getElementById('uno')
let DOS = document.getElementById('dos')
let TRES = document.getElementById('tres')

// BUBBLING -> desde el elemento más anidado al exterior
// TRES.addEventListener('click', () => console.log('Click en tres'), false) // false o no definido: BUBBLING / true: capturing
// DOS.addEventListener('click', () => console.log('Click en dos'))
// UNO.addEventListener('click', () => console.log('Click en uno'))


// BUBBLING -> desde el exterior al elemento anidado
 TRES.addEventListener('click', function() {
     // e.stopPropagation() // detiene la propagación del evento hacia elementos superpuestos
     console.log('Click en tres'), true // true: capturing
})
DOS.addEventListener('click', () => console.log('Click en dos'), true)
UNO.addEventListener('click', () => console.log('Click en uno'), true)

/* ------------------------------------------------------- */
console.log('\n/* Aplicación avanzada de propagación de Eventos */')
/* ------------------------------------------------------- */

let estatico = document.getElementById('estatico')

let botonCreado = false


estatico.addEventListener('click', function() {
    console.log('Soy un botón estático')

    // limitación de creación 
    if (!botonCreado) {
        let dinamico = document.createElement('button')
        dinamico.innerText = 'Dinámico'
        dinamico.id = 'dinamico'
        document.body.appendChild(dinamico)

        /* Forma de solución para poder activar la referencia una vez que fue creado. No es la recomendada porque es un callback anidado */
        // dinamico.addEventListener('click', function() {
        // console.log('Soy un botón dinámico')
        // })

        botonCreado = true
    }
})

/* Otra forma de solución mediante la propagación avanzada de eventos */
document.addEventListener('click', function(e) {
    // console.log(e)
    let id = e.target.id
    if (id == 'dinamico') {
        console.log('Soy el botón dinámico')
    }
})

/* ------------------------------------------------------- */
console.log('\n/* Eventos con comportamiento automático */')
/* ------------------------------------------------------- */

let google = document.querySelector('#google')
google.addEventListener('click', (e) => {

    e.preventDefault()

    console.log('Click en Link!')
})


/* ------------------------------------------------------- */
console.log('\n/* Manipulación del DOM con un evento del BOM */')
/* ------------------------------------------------------- */

window.addEventListener('resize', () => {
    console.log('Cambió el tamaño del navegador')

    document.getElementById('info-resize').innerHTML = `<b>Cambió el tamaño del navegador</b><br>
    Las dimensiones externas son ${outerWidth} pixeles de ancho por ${outerHeight} pixeles de altura. <br>
    Las dimensiones internas son ${innerWidth} pixeles de ancho por ${innerHeight} pixeles de altura. <br>`
})


/* ------------------------------------------------------- */
console.log('\n/* Eventos CUSTOM (customizados) */')
/* ------------------------------------------------------- */

// 1) Creación del Evento
let ev1 = new Event('look1', {'bubbles': true, 'cancelable': false})
let ev2 = new Event('look2', {'bubbles': true, 'cancelable': false})
let ev3 = new Event('look3', {'bubbles': true, 'cancelable': false})


// 2) Resgistro del evento look1, utilizando addEventListener
document.addEvelentListener('look1', () => {
    console.log('look1')
    document.dispatchEvent(ev2)
})

document.addEvelentListener('look2', () => {
    console.log('look2')
})

document.addEvelentListener('look3', () => {
    console.log('look3')
})
// 3) Dispatch del evento look1
// let btnLook = document.getElementById('btn-look')
// btnLook.addEventListener('click', () => {
//     document.dispatchEvent(ev1)
// })

// opción sin referenciar el elemento en una variable (chain)
document.getElementById('btn-look').addEventListener('click', () => {
    document.dispatchEvent(ev1)
})

setInterval(() => {
    console.warn('FechaHora: ${new Date().toLocaleString()}')
    document.dispatchEvent(ev3)
}, 2000)