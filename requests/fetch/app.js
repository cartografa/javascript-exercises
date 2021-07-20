// fetch('https://icanhazdadjoke/23/2', {
//     headers: { Accept: 'application/json' }
// })
//     .then((res) => {
//         if (res.status !== 200) {
//             console.log('Problem!', res.status);
//             return;
//         }
//         res.json().then((data) => {
//             console.log(data);
//         });
//     })
//     .catch(function(err) {
//         console.log('Fetch Error', err)
//     });

// //REWRITING SWAPI REQUEST:
// fetch('https://swapi.dev/api/planets/')
//     .then((response) => {
//         if (!response.ok) {
//             throw new Error(`Status Code Error: ${response.status}`);
//         } 
//         return response.json();
//     })
//     .then((data) => { //return a promise
//         console.log('FETCHED ALL PLANETS!')
//         const filmURL = data.results[0].films[0];
//         return fetch(filmURL);
//     })
//     .then((response) => {
//         if (!response.ok) {
//             throw new Error(`Status Code Error: ${response.status}`);
//         } 
//         return response.json();
//     })
//     .then((data) => {
//         console.log('FETCHED FIRST FILM (of first planet)')
//         console.log(data);
//     })
//     .catch((err) => {
//         console.log('SOMETHING WENT WRONG WITH FETCH!');
//         console.log(err);
//     });



//REFACTORING SWAPI REQUEST WITH FUNCTIONS:
const checkStatusAndParse = (response) => {
    if (!response.ok) {
        throw new Error(`Status Code Error: ${response.status}`);
    } 
    return response.json();
}

const printPlanets = (data) => {
    console.log('Loaded 10 more planets...');
    for(let planet of data.results){
        console.log(planet.name);
    }
    return Promise.resolve(data.next);
}

const fetchNextPlanets = (url = 'https://swapi.dev/api/planets/') => {
    return fetch(url);
}

fetchNextPlanets()
.then(checkStatusAndParse)
.then(printPlanets)
.then(fetchNextPlanets)
.then(checkStatusAndParse)
.then(printPlanets)
.catch((err) => {
    console.log('SOMETHING WENT WRONG WITH FETCH!');
    console.log(err);
});