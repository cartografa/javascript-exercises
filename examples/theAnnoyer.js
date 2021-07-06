const annoyer = {
    phrases: ["¿quieres ser tu propio jefe?",
              "vibrá alto",
              "el que quiere, puede",
              "por algo será",
    ],
    pickPhrase() {
        const {phrases} = this;
        const idx = Math.floor(Math.random() * phrases.length);
        return phrases[idx]
    }, 
    start() {
        //setInterval(function(){
           // console.log(this.pickPhrase) <-- this is set to the global scope, to the window    
        //}, 2000)
        this.timerId = setInterval(() => {
            console.log(this.pickPhrase()) //<--- usando una arrow function referencia el this padre
        }, 1500) 
    },
    stop() {
        clearInterval(this.timerId);
    }  
}