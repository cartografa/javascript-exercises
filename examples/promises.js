// const willGetYouADog = new Promise((resolve, reject) => {
//     const rand = Math.random();
//     if (rand < 0.5) {
//         resolve();
//     }
//     else {
//         reject();
//     }
// });

// willGetYouADog.then(() => {
//     console.log('YAY WE GOT A DOG!!!');
// });
// willGetYouADog.catch(() => {
//     console.log('NO DOG :(');
// });

// FUNCTION RETURNING PROMISE
// const makeDogPromise = () => {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             const rand = Math.random();
//             if (rand < 0.5) {
//                 resolve();
//             }
//             else {
//                 reject();
//             }
//         }, 5000); 
//     });
// };


// makeDogPromise()
//     .then(() => {
//         console.log('YAY WE GOT A DOG!!!');
//     })
//     .catch(() => {
//         console.log('NO DOG :(');
//     });



// RESOLVING REJECTING VALUES WITH VALUES:
const fakeRequest = (url) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
                const pages = {
                    '/users': [
                        {id: 1, username: 'Bilbo'},
                        {id: 5, username: 'Esmeralda'}
                    ],
                    '/about' : 'This is the about page!'
                };
                const data = pages[url]
                if (data) {
                    resolve({status: 200, data});
                } else {
                    reject({status: 404 });
                }
            }, 1000);
    });
};

fakeRequest('/users')
    .then((res) => {
        console.log('Status Code', res.status)
        console.log('Data', res.data)
        console.log('REQUEST WORKED!')
    })
    .catch((res) => {
        console.log(res.status)
        console.log('REQUEST FAILED!')
});

// WON'T WORK
fakeRequest('/dogs')
    .then((res) => {
        console.log('Status Code', res.status)
        console.log('Data', res.data)
        console.log('REQUEST WORKED!')
    })
    .catch((res) => {
        console.log(res.status)
        console.log('REQUEST FAILED!')
});