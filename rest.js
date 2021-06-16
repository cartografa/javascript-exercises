/* REST PARAMETERS:
collects all arguments into an array.
(came to replace arguments object)
*/

function sumAll (...nums) {
    let total = 0;
    for (let n of nums) total += n;
    return total;
}

// example with reduce and arrow function:
function sum(...nums) {
    return nums.reduce((total, currVal) => {
        return total + currVal;
    })
}

// it can also be used to collect remaining arguments
function fullName(first, last, ...titles) {
    console.log('first', first)
    console.log('last', last)
    console.log('titles', titles)
}

//another example with 2 arrow functions
const multiply = (...nums) => (
    nums.reduce((total, currVal) => total * currVal)
)






