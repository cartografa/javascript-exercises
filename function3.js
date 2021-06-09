/* function isValidPassword (password, username) {
    if (password.lenght < 8 || 
        password.indexOf(' ') !== -1 ||
        password.indexOf(username) !== -1) {
        return false
    }
    return true;
} */

function isValidPassword (password, username) {
    const tooShort = password.lenght < 8;
    const hasSpace = password.indexOf (' ') !== -1;
    const tooSimilar = password.indexOf (username) !== -1;

    /*if (tooShort || hasSpace || tooSimilar) return false;
    return true;*/

    return !tooShort && !hasSpace && !tooSimilar;
}

isValidPassword ('89Fjjnms', 'dogLuvr');
isValidPassword ('dogLuvr123!', 'dogLuvr');
isValidPassword ('hello1', 'dogLuvr');