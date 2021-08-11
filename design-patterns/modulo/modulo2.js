(function() {
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

    /* PUBLICACIÓN - FORMA 1 - (con wrapper) */
    // no expone el algoritmo
    // window.modulo2 = function() { return getClaveEncriptada() }
    // window.modulo2 = () => getClaveEncriptada()
    // window.modulo3 = getClave
    // window.modulo4 = firmarTexto
    // window.modulo5 = getRandom

     /* PUBLICACIÓN - FORMA 2 - (con wrapper) */
    window.modulo2 = {
        getClaveEncriptada: () => getClaveEncriptada(),
        getClave: () => getClave(),
        firmarTexto: texto => firmarTexto(texto),
        getRandom: () => getRandom() 
    }

    console.warn('Módulo 2 Instalado')
})()