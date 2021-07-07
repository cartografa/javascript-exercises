console.log(document.querySelector('title').textContent);



function delaySync() {
    for(let i=0; i<3e9; i++) {}
}

// console.log(`
// /* ------------------------------------------- */
// /*            código sincrónico en JS          */
// /* ------------------------------------------- */
// `)

// console.log('Inicio de tareas');

// console.log('Tarea 1 --> paso A'); delaySync()
// console.log('Tarea 1 --> paso B'); delaySync()
// console.log('Tarea 1 --> paso C'); delaySync()
// console.log('Tarea 1 --> paso D'); delaySync()
// console.log('Fin de la Tarea 1');

// console.log('Tarea 2 --> paso A'); delaySync()
// console.log('Tarea 2 --> paso B'); delaySync()
// console.log('Tarea 2 --> paso C'); delaySync()
// console.log('Tarea 2 --> paso D'); delaySync()
// console.log('Fin de la Tarea 2');

// console.log('Otras tareas...');




// function delayAsync(cb) {
//     setTimeout(cb, 1500)
// }

// console.log(`
// /* ------------------------------------------- */
// /*            código asincrónico en JS         */
// /* ------------------------------------------- */
// `)

// console.log('Inicio de tareas');

// console.log('Tarea 1 --> paso A'); 
// delayAsync(() => {
//     console.log('Tarea 1 --> paso B') 
//     delayAsync(() => {
//         console.log('Tarea 1 --> paso C')
//         delayAsync(() => {
//             console.log('Tarea 1 --> paso D')
//             delayAsync(() => {
//                 console.log('Fin de la Tarea 1')
//             })
//         })
//     })
// })

// console.log('Tarea 2 --> paso A'); 
// delayAsync(() => {
//     console.log('Tarea 2 --> paso B') 
//     delayAsync(() => {
//         console.log('Tarea 2 --> paso C')
//         delayAsync(() => {
//             console.log('Tarea 2 --> paso D')
//             delayAsync(() => {
//                 console.log('Fin de la Tarea 2')
//             })
//         })
//     })
// })

// console.log('Otras tareas...');



console.log(`
/* ------------------------------------------- */
/*   comunicación asincrónica con AJAX (XML)   */
/*                HTTP requests                */
/*         Asynchronous JavaScript And XML     */
/* ------------------------------------------- */
`)

// new XMLHttpRequest: construye una instancia de comunicación
// pertenece al BOM
// mecanismo para pedir recursos de forma asincrónica

let xhr = new XMLHttpRequest // instancia de comunicación
console.log(xhr)
console.log(xhr.readyState) // 0

/* 
----------------------------------------------------------
xhr.readyState: (estado de la comunicación)
0 -> La instancia está creada
1 -> La instancia está configurada
2 -> Hay intercambio de headers entre el cliente y el servidor
3 -> Transferencia de información
4 -> Fin de la comunicación (positiva o negativa)
----------------------------------------------------------
xhr.status: (códigos de estado http)
100-199 -> respuestas informativas
200-299 -> respuestas satisfactorias
300-399 -> redirecciones
400-499 -> errores de cliente
500-599 -> errores de servidores
----------------------------------------------------------
*/

// xhr.addEventListener('load', () => {
//     console.log(xhr.readyState)
//     console.log(xhr.response)
// })


// registro del evento de cambio de estado de la comunicación
xhr.addEventListener('readystatechange', () => {
    console.log(`Cambió readystate -> ${xhr.readyState}`) 

    if(xhr.response == 2) {
        let headers = xhr.getAllResponseHeaders()
        let tipo = xhr.getResponseHeader('content-type')
        console.log(tipo)

        if(!tipo.includes('text/plain')) {
            xhr.abort()
        }
    }

    if(xhr.readyState == 4) {
        if(xhr.status == 200) {
            console.log(xhr.response)
        } else {
            console.error('Error status comunicación', xhr.status)
        }
    }
})

xhr.addEventListener('timeout', () => {
    console.warn('La petición se ha excedido de tiempo')
})

xhr.open('get', 'texto.txt') // configuración de la comunicación
xhr.timeout = 1000            // tiempo max en ms en el que espera que llegue la respuesta (0 = deshabilitado)
xhr.send()                    // envío de la petición

// setTimeout(() => {
//     console.log(xhr.readyState)
//     console.log(xhr.response)
// }, 100)

