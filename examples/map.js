const texts = ['buenísimo', 'genial', 'joya', 'de una'];
const caps = text.map(function (t) {
    return t.toUppercase()
})

const numbers = [20, 21, 22, 23, 24, 25, 26, 27];
const doubles = numbers.map(function (num) {
    return num * 2; 
})

// retornar un objeto:
const numbersObject = numbers.map(function (n) {
    return {
        value: n,
        isEven: n % 2 === 0
    }
})


const words = ['asap', 'brb', 'iirc', 'cw'];
const abbrevs = words.map(function(word){
    return word.toUppercase().split('').join('.');
})