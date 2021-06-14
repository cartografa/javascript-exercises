//Spread in function calls:
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
