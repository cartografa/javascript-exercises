(function() {
    'use strict'

    let instancia

    function App() {
        if(instancia == undefined) {
            this.id = Math.random()
            instancia = this
        }
        else {
            console.warn('No se permite instanciar más de una vez de esta función constructora')
            return instancia
        }
    }

    window.App = App

    console.warn('Singleton Instalado')
})()