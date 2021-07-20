// const myReq = new XMLHttpRequest();

// myReq.onload() = function() {
//     const data = JSON.parse(this.responseText);
//     console.log(data);
// };
// myReq.onerror = function (err) {
//     console.log('ERROR!', err);
// };

// myReq.open('get', 'https://icanhazdadjoke.com/', true);
// myReq.setRequestHeader('Accept', 'application/json');
// myReq.send();

const firstReq = new XMLHttpRequest();

firstReq.addEventListener('load', function() {
    console.log('FIRST REQUEST WORKED!');
    // Parsear el JSON a JS
    const data = JSON.parse(this.responseText)
    const filmURL = data.results[0].films[0]
    const filmReq = new XMLHttpRequest();
    filmReq.addEventListener('load', function() {
        console.log('SECOND REQUEST WORKED!')
        const filmData = JSON.parse(this.responseText);
        console.log(filmData)
    })
    filmReq.addEventListener('error', function(e) {
        console.log('Error!', e);
    })
    filmReq.open('GET', filmURL);
    filmReq.send();
    // Obtener el nombre de los planetas
    // for (let planet of data.results) {
    //     console.log(planet.name)
    // }
});
firstReq.addEventListener('error', () => {
    console.log('ERROR!');
});

firstReq.open('GET', 'https://swapi.dev/api/planets/');
firstReq.send();
console.log('Request Sent!');