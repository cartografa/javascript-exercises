(function() {
    'use strict'

    let x = true;
    function getX() {
        console.log(x)
    }

    // Públicar getX:
    // window.modulo1 = getX (puede ir o no con window)
    modulo1 = getX

    console.warn('Módulo 1 Instalado')
})()