/* const square = function(x) {
    return x * x;
} */

const square = (x) => {
    return x * x;
}

const sum = (x, y) => {
    return x + y;
}

// cuando tenemos un parámetro solo se pueden
// obviar los paréntesis:
const esPar = num => {
    return num % 2 === 0;
}

const multiply = (x, y) => {
    return x * y;
};

const saludo = () => {
    console.log('Holi!')
};

//implicit returns. solo cuando hay 
//UNA expresión a retornar.
const square = n => (
    n * n
);
//más compacto:
const square = n => n * n;

//tres versiones:
const nums = [1, 2, 3, 4, 5, 6, 7, 8];

const doubles1 = nums.map(function(n) {
    return n * 2;
});
const doubles2 = nums.map(n => {
    return n * 2;
});
const doubles3 = nums.map(n => n * 2);

//par-impar
const parityList = nums.map((n) => {
    (n % 2 === 0) ? 'even': 'odd';
});
