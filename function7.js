const add = function (x, y) {
    return x + y;
}

function substract (x, y) {
    return x - y;
}

const multiply = function (x, y) {
    return x * y;
}

function divide (x, y) {
    return x / y;
}

const operations = [add, substract, multiply, divide];


for (let f of operations) {
    console.log (f(100, 4));
}

// method. adding a function to an object.

const thing = {
    doSomething: multiply
}

thing.doSomething(10, 2);

