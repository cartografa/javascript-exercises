console.log('\nObservables RxJS (implementación de Patrón PUB/SUB')

console.log('******* PRODUCTORES Y CONSUMIDORES DE DATOS **********');

console.log(`
/*********************************************/
/*     Function PULL (pasiva) - single data  */
/*********************************************/
`)

// productor de datos (pasivo)
let contadorFunction = 0
function contarFunction() {
    return contadorFunction++
}

// consumidor de datos (activo)
console.log(contarFunction())
console.log(contarFunction())
console.log(contarFunction())
console.log(contarFunction())

console.log(`
/*********************************************/
/*   Iterator PULL (pasiva) - multiple data  */
/*********************************************/
`)

// productor de datos (pasivo)
let contadorIterator = 0
function *funGENcontarIterator() {
    yield contadorIterator++
    yield contadorIterator++
    yield contadorIterator++
    return contadorIterator++
}

// consumidor de datos (activo)
const contarInterator = funGENcontarIterator();
console.log(contarInterator)

console.log(contarInterator.next().value)
console.log(contarInterator.next().value)
console.log(contarInterator.next().value)
console.log(contarInterator.next().value)

// function *fgGetRabdom() {
//     while(true) {
//         yield Math.random()
//     }
// }

// const getRandom = fgGetRabdom();
// for(let i = 0; i < 10; i++) {
//     console.log(getRandom.next().value)
// }


console.log(`
/*********************************************/
/*   Promise Push (activa) -    single data  */
/*********************************************/
`)

// productor de datos (activo)
let contadorPromise = 0
function contarPromise(tiempo) {
    return new Promise (resolve => {
        setTimeout(() => resolve(contadorPromise++), tiempo)
    })
}

// consumidor de datos (pasivo)
contarPromise(100)
.then (contador => console.log('Promise', contador))

contarPromise(100)
.then (contador => console.log('Promise', contador))

contarPromise(100)
.then (contador => console.log('Promise', contador))

contarPromise(100)
.then (contador => console.log('Promise', contador))


console.log(`
/*********************************************/
/* Observable Push (activa) - multiple data  */
/*********************************************/
`)

const { Observable } = rxjs

// productor de datos (activo)
let contadorObservable = 0
function contarObservable(tiempo) {
    let refTimer = null
    return new Observable ( subscriber => {
        refTimer = setInterval(() => {
            //console.warn(contadorObservable)
            subscriber.next(contadorObservable++)
        }, tiempo)

        return () => {
            console.warn('contarObservable desubscripto.')
            clearInterval(refTimer)
        }
    })
}


// consumidor de datos (pasivo)
// Subscripción:
let subscripcion = contarObservable(1000)
.subscribe (contador => console.log('Observable', contador))

// Desubscripción:
setTimeout(() => {
    subscripcion.unsubscribe()
}, 4000);


/*********************************************/
/*        Otro ejemplo de OBSERVABLES        */
/*********************************************/

function espejarInput() {
    const input = document.querySelector('input')

    return new Observable(subscriber => {

        const atenderEventInput =  () => {
            let datoInvertido = input.value.split('').reverse().join('')
            subscriber.next(datoInvertido)
        }

        input.addEventListener('input', atenderEventInput)

        return () => {
            console.warn('espejarInput desubscripto.')
            input.removeEventListener('input', atenderEventInput)
        }
    })
}

// Publicador
let obsEspejarInput = espejarInput()

// Subscriptor
let subscripcion1 = obsEspejarInput.subscribe(dato => document.querySelectorAll('span')[0].innerText = dato)
let subscripcion2 = obsEspejarInput.subscribe(dato => document.querySelectorAll('span')[1].innerText = dato)
let subscripcion3 = obsEspejarInput.subscribe(dato => document.querySelectorAll('span')[2].innerText = dato)

// Desubscriptor
setInterval(() => {
    subscripcion1.unsubscribe() 
}, 6000)

setInterval(() => {
    subscripcion2.unsubscribe() 
}, 10000)

setInterval(() => {
    subscripcion3.unsubscribe() 
}, 15000)
