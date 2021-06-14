/*Si uno de los argumentos faltan en 
la invocación, se puede hacer un 
default parameter. */

//The old way:
function multiply (x, y) {
    if (typeof y === 'undefined') {
        y = 1;
    }
    return x * y;
}

//Shorter way with ternary operator
function multiply2 (x, y) {
    y = typeof y === 'undefined' ? 1 : y;
    return x * y;
}

//DEFAULT PARAMETER
function multiply3 (x, y = 1) {
    return x * y;
}

//otro ejemplo:
const saludar = (persona, saludo = 'hola') => {
    console.log(`${saludo}, ${persona}!`);
}

