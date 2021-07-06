console.log(document.querySelector('title').textContent)

/*********************************************************/
/*                   EVENTOS EN FORMULARIOS              */
/*********************************************************/
// let input = document.querySelector('input')

// 1) Evento de click (button)
/* let btn = document.getElementById('btn')
btn.addEventListener('click', e => {
    e.preventDefault() // evitar que la página se reinicie, comportamiento default del HTML

    let valido = input.checkValidity()

    if(valido) {
        // console.dir(input)
        let valor = input.value

        console.log('Click', '['+valor+']')
    } else {
        console.warn('Este campo es obligatorio')
    }
}) */

/* // 2) Evento de submit (form)
let form = document.getElementById('formulario')
form.addEventListener('submit', e => {
    e.preventDefault() // evitar que la página se reinicie, comportamiento default del HTML

    // console.dir(input)
    let valor = input.value

    console.log('Submit', '['+valor+']')
}) */


/*********************************************************/
/*  VALIDACIÓN DE CAMPOS DE FORMULARIOS A TRAVÉS DE JS   */
/*              (con mensajes de validación)             */
/*********************************************************/

let input = document.querySelector('input')
let form = document.querySelector('form')

// nuevo método para input
input.setCustomValidityJS = function(mensaje) {
    let div = document.querySelector('div')
    div.innerText = mensaje 
    div.style.display = mensaje? 'block' : 'none'
}

function validarInput(valor) {
    valor = valor.trim()

    let longitud = valor.lenght
    let mensaje = ''

    // validación por required
    if (longitud == 0) {
        mensaje = 'Este campo es obligatorio'
        console.log(mensaje)
        input.setCustomValidityJS(mensaje)
        return null
    } else if (longitud < 3) {
        mensaje = 'Este campo debe poseer al menos 3 caracteres'
        // console.warn(mensaje)
        input.setCustomValidityJS(mensaje)
        return null
    } else if (longitud > 10) {
        mensaje = 'Este campo debe poseer como máximo 10 caracteres'
        // console.warn(mensaje)
        input.setCustomValidityJS(mensaje)
        return null
    }
    else if (valor.includes(' ')) {
        mensaje = "No se permiten espacios intermedios"
        input.setCustomValidityJS(mensaje)
        return null
    } else if (!(valor[0] >= 'A' && valor[0] <= 'Z')) {
        mensaje = 'El nombre debe comenzar con mayúscula'
        input.setCustomValidityJS(mensaje)
    }

    input.setCustomValidityJS(mensaje)
    return valor
}


function verificarInputRegEx(valor) {
    /* ------------------------------------------------- */
    /*     EJEMPLO DE VALIDACIÓN DE NOMBRE CON REGEX     */
    /* ------------------------------------------------- */
//     let validadorNombre = /^[A-Z][a-z]{2,9}$/

//     if (!validadorNombre.test(valor)) {
//         let mensaje = "Este campo no es válido"

//         let lg = valor.lenght
//         if(lg == 0) mensaje = 'Este campo es obligatorio'
//         else if (lg < 3) mensaje = 'Este campo debe poseer al menos 3 caracteres'
//         else if (lg > 10) mensaje = 'Este campo debe poseer como máximo 10 caracters'


//         input.setCustomValidityJS(mensaje)
//         return null
//     }
//     input.setCustomValidityJS('')
//     return valor
// }
    /* ------------------------------------------------- */
    /*          EJEMPLO DE VALIDACIÓN DE EMAIL           */
    /* ------------------------------------------------- */
    let validadorEmail = /^[a-zA-Z0-9]+@\w+\.\w{2,3}(\.(ar|uy))?$/

    if (!(validadorEmail.test(valor))) {
        let mensaje = "Debe escribir un email válido"

        input.setCustomValidityJS(mensaje)
        return null
    }
    input.setCustomValidityJS('')
    return valor
}

// validación en tiempo real
input.addEventListener('input', () => {
    //console.log(input.value)
    // validarInput(input.value)
    verificarInputRegEx(input.value)

})

form.addEventListener('submit', e => {
    e.preventDefault()

    let valor = verificarInputRegEx(input.value)
    if (valor) {
        input.value = ''
        console.log('Submit', '['+valor+']')
    }
})

/*********************************************************/
/*                 EXPRESIONES REGULARES                 */
/*********************************************************/

// regex101.com

// let miRegExp = new RegExp('ab c', 'i') //Forma declarativa tipo objeto
// let miRegExp = /ab c/                     //Forma declarativa literal

// let mensaje = 'aB c'

// let valido = miRegExp.test(mensaje)
// console.log('Mensaje', mensaje, valido)







