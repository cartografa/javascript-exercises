console.log(document.querySelector('title').textContent + '\n\n');

// /********************************************/
// /*               Objeto Mailer              */
// /********************************************/
// // función constructora
// let Mailer = function() {}
// Mailer.prototype = {
//     enviarMailDeCompra : function(mail) {
//         console.log('Enviando email...')
//         setTimeout(() => {
//             console.log(`Email enviado a ---> ${mail}`)
//         }, 2000)
//     }
// }

// /********************************************/
// /*               Objeto Orden               */
// /********************************************/
// let Orden = function(mail) {
//     this.mail = mail
// }
// Orden.prototype = {
//     enviar : function() {
//         console.log('*** Orden de compra almacenada ***')
//         this.enviarMail(this.mail)
//     },
//     enviarMail : function(mail) {
//         // ---------------------------------------------------//
//         // Fuerte acomplamiento entre los obj. orden y mailer //
//         // ---------------------------------------------------//
//         let mailer = new Mailer()
//         mailer.enviarMailDeCompra(mail)
//     }
// }

// /********************************************/
// /*                  Acción                  */
// /********************************************/
// let orden = new Orden('juan@gmail.com')
// orden.enviar()



/********************************************************/
/*  Bus de comunicación entre Objetos (Patrón Pub Sub)  */
/********************************************************/
let busComunicacion = {
    acciones : {},

    subscribir : function(servicio, callback) {
        if (!this.acciones[servicio]) this.acciones[servicio] = []
        this.acciones[servicio].push(callback)
        console.warn(`Servicio ${servicio} con una nueva subscripción`)
    }, 

    publicar : function(servicio, datos) {
        if (!this.acciones[servicio] || this.acciones[servicio].length < 1) {
            console.error(`En este servicio ${servicio} no hay subscriptores (~publicar)`)
            return
        }
        this.acciones[servicio].forEach(callback => {
            if(callback) callback(datos || {})
        });
    }, 

    desubscribir : function(servicio) {
        if (!this.acciones[servicio] || this.acciones[servicio].length < 1) {
            console.error(`En este servicio ${servicio} no hay subscriptores (~desubscribir)`)
            return
        }

        this.acciones[servicio] = []
        console.warn(`Servicio ${servicio} desubscripto`)
    }
}

/*********************************************************/
/* Prueba del Bus de Comunicación implementado (PUB/SUB) */
/*********************************************************/

// // TEST EJEMPLO
// // Me subscribo al servicio de diarios dominicales ---> SUB
// busComunicacion.subscribir('Diario del Domingo', diario => console.log(`Llegó el diario ${diario}`))
// busComunicacion.subscribir('Diario del Domingo', diario => document.write(`Llegó el diario ${diario} <br>`))

// // El diariero publica el diario  ---> PUB
// let refTimer = setInterval(() => {
//     busComunicacion.publicar('Diario del Domingo', 'Noticias Random')
// }, 7000)

// // Luego de varias entregas, me desubscribo
// setTimeout(() => {
//     busComunicacion.desubscribir('Diario del Domingo')
//     clearInterval(refTimer)
// }, 22000)


/**********************************************************************/
/* Utilización del P. PUB/SUB para desacoplar los Obj. orden y mailer */
/**********************************************************************/

/********************************************/
/*           Objeto Mailer  (SUB)           */
/********************************************/
let Mailer = function() {
    busComunicacion.subscribir('orden', mail => this.enviarMailDeCompra(mail))
}
Mailer.prototype = {
    enviarMailDeCompra : function(mail) {
        console.log('Enviando email...')
        setTimeout(() => {
            console.log(`Email enviado a ---> ${mail}`)
        }, 2000)
    }
}

/********************************************/
/*           Objeto Orden (PUB)              */
/********************************************/
let Orden = function(mail) {
    this.mail = mail
}
Orden.prototype = {
    enviar : function() {
        console.log('*** Orden de compra almacenada ***')
        this.enviarMail(this.mail)
    },
    enviarMail : function(mail) {
        busComunicacion.publicar('orden', mail)

        // // ---------------------------------------------------//
        // // Fuerte acomplamiento entre los obj. orden y mailer //
        // // ---------------------------------------------------//
        // let mailer = new Mailer()
        // mailer.enviarMailDeCompra(mail)
    }
}

/********************************************/
/*                  Acción                  */
/********************************************/
let mailer = new Mailer()
let orden = new Orden('juan@gmail.com')

orden.enviar()