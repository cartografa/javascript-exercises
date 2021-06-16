//SPREAD IN FUNCTION CALLS:
const nums = [46, 95, 26, 78, 41]

Math.max(nums) 
//Da NaN porque toma al array como un solo elemento

Math.max(...nums)
//spread expande el array en diferentes argumentos

const colores = ['rojo', 'azul', 'magenta', 'verde lima'];

function cuatroColores (a, b, c, d) {
    console.log('a', a)
    console.log('b', b)
    console.log('c', c)
    console.log('d', d)
}

cuatroColores(...colores)

//también se puede usar spread en un string.

//****************************************/
//SPREAD IN ARRAY LITERALS

const cefalopodos = ['pumpo dumbo', 'calamar gigante', 'sepia extravagante'];

const gastropodos = ['caracol gigante africano', 'babosa banana', 'babosa de neón variable'];

const cnidarias = ['coral de fuego', 'medusa luna'];

const moluscos = [...cefalopodos, ...gastropodos];

const invertebrados = [...cnidarias, ...gastropodos, ...cefalopodos];

const cnidariasCopia = [...cnidarias] //es un array nuevo, no tiene la misma referencia

//****************************************/
//SPREAD IN OBJECT LITERALS
//Copies properties from one object into another object literal

const feline = {
    legs: 4,
    family: 'Felidae'
}

const canine = {
    family: 'Caninae',
    furry: true
}

const dog = {
    ...canine,
    isPet: true,
    adorable: true
}

const cat = {
    ...feline,
    isGrumpy: true,
    personality: 'unpredictable'
}

const threeLeggedDog = {
    ...canine,
    legs: 3 //sobreescribe la key que hereda de canine
}



