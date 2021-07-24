class Pet {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    eat() {
        return `${this.name} is eating`;
    }
}

class Cat extends Pet { 
    constructor(name, age, livesLeft = 9) {
        // super is a reference to what we're extending off.
        super(name, age);
        this.livesLeft = livesLeft;
    }
    meow() {
        return 'MEOWWWWW!!'
    }
}

class Dog extends Pet {
    bark() {
        return 'WOOF!!'
    }
    eat(){
        return `${this.name} scarfs them food`
    }
}

const monty = new Cat('Monty', 9);
const wyatt = new Dog('Wyatt', 13);