// setTimeout(() => {
//     btn.style.transform = `translateX(100px)`;
//     setTimeout(() => {
//          btn.style.transform = `translateX(100px)`;
//          setTimeout(() => {
//             btn.style.transform = `translateX(100px)`;
//             setTimeout(() => {
//                 btn.style.transform = `translateX(100px)`;
//                 setTimeout(() => {
//                     btn.style.transform = `translateX(100px)`;
//                }, 1000)
//            }, 1000)
//        }, 1000)
//     }, 1000)
// }, 1000)


// This function moves an element "amount" number of pixels after a delay.
// If the function will stay on screen, we move the element and call the onSuccess callback
//funcion.
// If the function will move off screen, we do not move the element and instead call the
// onFailure callback
// const moveX = (element, amount, delay, onSuccess, onFailure) => {
//     const bodyBoundary = document.body.clientWidth;
//     const elRight = element.getBoundingClientRect().right;
//     const currLeft = element.getBoundingClientRect().left;

//     if(elRight + amount > bodyBoundary) {
//         console.log('DONE - CANNOT GOT THAT FAR');
//         onFailure();
//     } 
//     else {
//         setTimeout(() => {
//             element.style.transform = `translateX(${currLeft + amount}px)`;
//             onSuccess();
//         }, delay)
//     }
// };

// // moveX(btn, 100, 1000, () => {
// //     moveX(btn, 100, 1000, () => {
// //         moveX(btn, 100, 1000, () => {
// //             moveX(btn, 100, 1000, () => {
// //                 moveX(btn, 1000, 1000);
// //             })
// //         })
// //     });
// // });


// // NASTY WAY OF WRITING IT:
// moveX(btn, 100, 1000, 
//     () => {moveX(btn, 400, 1000, 
//             () => {moveX(btn, 700, 1000), 
//                     () => {
//                         alert('Cannot move further!')
//                     }}), 
//             () => {alert('Cannot move further!')}}, 
//     () => {alert('Cannot move further!')});


// REFACTORING WITH PROMISES
const btn = document.querySelector('button');
const moveX = (element, amount, delay) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const bodyBoundary = document.body.clientWidth;
            const elRight = element.getBoundingClientRect().right;
            const currLeft = element.getBoundingClientRect().left;
        
            if (elRight + amount > bodyBoundary) {
                reject();
            } 
            else {      
                element.style.transform = `translateX(${currLeft + amount}px)`;
                resolve();
            }
        }, delay);
    })  
};

moveX(btn, 300, 1000)
    .then(() => {
        return moveX(btn, 300, 1000);
    })
    .then(() => {
        return moveX(btn, 300, 1000);
    })
    .then(() => {
        return moveX(btn, 300, 1000);
    })
    .then(() => {
        return moveX(btn, 300, 1000);
    })
    .then(() => {
        console.log('DONE WITH MOVING');
    })
    .catch(() => {
        console.log('OUT OF SPACE. CANNOT MOVE')
    })