/* function isPangram (sentence) {
    let lowerCased = sentence.toLowerCase();
    for (let char of 'abcdefghijklmnopqrstuvwxyz') {
        if (lowerCased.indexOf(char) === -1) {
            return false;
        }
    }
    return true;
} */

//WITH INCLUDE - NOT SUPPORTED IN I.E.
function isPangram (sentence) {
    let lowerCased = sentence.toLowerCase();
    for (let char of 'abcdefghijklmnopqrstuvwxyz') {
        if (lowerCased.includes(char)) {
            return true;
        }
    }
    return false;
}