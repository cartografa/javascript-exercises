// const btn = document.querySelector('button');

// btn.addEventListener('click', function() {
//     alert('CLICKED!');
// })

// btn.addEventListener('click', function() {
//     console.log('SECOND THING!');
// })

// btn.addEventListener('mouseover', function() {
//     btn.innerText = "STOP TOUCHING ME";
// })

// btn.addEventListener('mouseout', function() {
//     btn.innerText = "Click Me!";
// })

// window.addEventListener('scroll', function() {
//     console.log('STOP SCROLLING!');
// })

/* ---------------------------------------------- */
/*        EVENTS ON MULTIPLE ELEMENTS             */
/* ---------------------------------------------- */

const colors = [
    'red',
    'orange',
    'yellow',
    'green',
    'blue',
    'purple',
    'indigo',
    'violet'
];

const changeColor = function(){
    const h1 = document.querySelector('h1');
    h1.style.color = this.style.backgroundColor;
}


const container = document.querySelector('#boxes');

for(let color of colors) {
    const box = document.createElement('div');
    box.style.backgroundColor = color;
    box.classList.add('box')
    container.appendChild(box);
    box.addEventListener('click', changeColor);
} 


