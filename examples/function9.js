//FUNCTIONS AS RETURN VALUES

function multiplyBy(num) {
    return function(x) { 
        return x * num;        
    }
}

const triple = multiplyBy(3);
const halve = multiplyBy(0.5);

console.log (triple(5));

function makeBetween(x, y) {
    return function(num) {
        return num >= x && num <= y;
    }
}

const isUnderage = makeBetween(0, 18);

const isInTheSeventies = makeBetween(1970, 1979);

const isNiceWeather = makeBetween(20, 25);

