// ASYNC function always return a promise.
// If the function returns a value, the promise will be resolved 
// with that value
// If the function throws an exception, the promise will be rejected.

async function greet(){
    return 'HELLO!';
}

greet().then((val) => {
    console.log('PROMISE RESOLVED WITH: ', val);
});

async function add (x,y) {
    if(typeof x !== 'number' || typeof y !== 'number') {
        throw 'X and Y must be numbers.'
    }
    return x + y;
}

add('e', 'r')
    .then((val) => {
        console.log('PROMISE RESOLVED WITH: ', val);
    })
    .catch((err) => {
        console.log('PROMISE REJECTED WITH: ', err);
    });

    // THE AWAIT KEYWORD
    // We can only use the await keyword inside of functions
    // declared with async
    // await will pause the execution of the function, waiting
    // for a promise to be resolved.

// function getPlanets() {
//     return axios.get('http://swapi.dev/api/planets/') 
// }

// getPlanets().then((res) => {
//     console.log(res.data);
// })

// async + await:
// async function getPlanets() {
//     const res = await axios.get('http://swapi.dev/api/planets/');
//     console.log(res.data); // only runs once previous line is complete
// }

// getPlanets().catch((err) => {
//     console.log('IN CATCH!', err)
// }); // best catch for multiple potential errors

async function getPlanets() {
    try {
        const res = await axios.get('http://swapi.dev/api/planets/');
         console.log(res.data); 
    }
    catch (err) {
        console.log('IN CATCH!', err);
    }
}

getPlanets();

