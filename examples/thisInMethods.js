// acá this se refiere al objeto person y
// no al objeto windows. está dentro de
// este scope
const person = {
    first: 'Cherilyn',
    last:  'Sarkisian',
    nickname: 'Cher',
    fullName() {
        //console.log(this);
        //console.log(`${this.first} ${this.last} AKA ${this.nickname}`)
        const {
            first,
            last, 
            nickname
        } = this;
        return(`${first} ${last} AKA ${nickname}`)
    },
    printBio() {
        const fullName = this.fullName();
        console.log(`${fullName} is a person!`)
    }
}

// la manera en la que se invoca la función que contiene this
// es la que setea su valor:
// si hago const printBio = person.printBio
// this va a referenciar a window y va a dar error.
// arrow functions con this en metodos no referencian al objeto en el que se encuentran