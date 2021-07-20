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

//REWRITING SWAPI REQUEST:
fetch('https://swapi.dev/api/planets/')
.then((response) => {
    if (!response.ok) {
        throw new Error(`Status Code Error: ${response.status}`);
    } else {
        response.json().then((data) => { //return a promise
            for (let planet of data.results) {
                console.log(planet.name)
            }
        });
    }
})
.catch((err) => {
    console.log('SOMETHING WENT WRONG WITH FETCH!');
    console.log(err);
})