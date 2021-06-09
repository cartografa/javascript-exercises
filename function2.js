/* function isGreen (color) {
    if (color.toLowerCase() === 'green') {
        return true;
    } 
    return false;
} */

function isGreen (color) {
    return color.toLowerCase() === 'green';
}

isGreen('purple')
isGreen('green')

function containsPurple (arr) {
    for (let color of arr) {
        if (color === 'purple' || color === 'magenta') {
            return true
        }
    }
    return false
}

containsPurple (['blue', 'pink', 'yellow'])
containsPurple (['blue', 'pink', 'magenta'])