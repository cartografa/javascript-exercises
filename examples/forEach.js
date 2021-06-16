const numbers = [20, 21, 22, 23, 24, 25, 26, 27];

numbers.forEach(function(num) { // anonymous function
    console.log(num * 2);
})

function printTriple(n) {
    console.log(n * 3);
}

numbers.forEach(printTriple);

// with a second parameter for capturing the index
numbers.forEach(function (num, index) {
    console.log(index, num);
})



