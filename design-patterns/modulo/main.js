// Se encuentran protegidas por el módulo
// console.log(x);
// console.log(getX);

console.log(`
/****************************************/
/*              MÓDULO 1                */
/****************************************/
`);

// console.log(window.modulo1)

console.log(`
/****************************************/
/*              MÓDULO 2                */
/****************************************/
`);

/* FORMA 1 */
// console.log(modulo2)
// console.log(modulo2())

// console.log(modulo3)
// console.log(modulo3())

// console.log(modulo4)
// console.log(modulo4('Hola'))

// console.log(modulo5)
// console.log(modulo5())

/* FORMA 2 */
console.log(modulo2.getClaveEncriptada)
console.log(modulo2.getClaveEncriptada())

console.log(modulo3.getClave)
console.log(modulo3.getClave())

console.log(modulo4.firmarTexto)
console.log(modulo4.firmarTexto('Hola'))

console.log(modulo5.getRandom)
console.log(modulo5.getRandom())
