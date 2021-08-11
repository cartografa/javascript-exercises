const libreria2 = (function() {
    'use strict'

    /* ZONA DE VARIABLES PRIVADAS */
    let clave = 'qwerty1234';

    /* ZONA DE FUNCIONES PRIVADAS */
    function getClaveEncriptada() {
        return clave.split('').reverse().join('')
    };
    function getClave() {
        let password = 'asdfgh'
        return password
    };
    function firmarTexto(texto) {
        return `${texto}.${Math.floor(Math.random()*100000)}`
    }
    function getRandom() {
        return Math.floor(Math.random()*1000) + 1
    }


     /* PUBLICACIÓN (con wrapper) */
    console.warn('Librería 2 Instalada')

    return {
        getClaveEncriptada: () => getClaveEncriptada(),
        getClave: () => getClave(),
        firmarTexto: texto => firmarTexto(texto),
        getRandom: () => getRandom() 
    }

})()