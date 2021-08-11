const libreria1 = (function() {
    'use strict'

    let x = true

    function getX() {
        console.log(x)
    }

    console.warn('Librería 1 Instalada')

    return {
        getX: () => getX()
    }  
})()