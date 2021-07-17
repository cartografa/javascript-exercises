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

const h1 = document.querySelector('h1');
const changeColor = function(event){
    console.log(event); 
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


// the event object and its properties
// document.body.addEventListener('keypress', function(e) {
//     console.log(e.key);
// })


// INPUT EVENTS
const input = document.querySelector('#username');

input.addEventListener('keyup', function(e) {
    console.log('KEY UP!') // fire with ANY key
})

input.addEventListener('keydown', function(e) {
    console.log('KEY DOWN!') // fire when release
})

input.addEventListener('keypress', function(e) {
    console.log('KEY PRESS!') // only when something shows up (in an input)
})


const addItemInput = document.querySelector('#addItem');
const itemsUL = document.querySelector('#items');

addItemInput.addEventListener('keypress', function(e) {
    console.log(e);
    if(e.key == 'Enter') {
        if (!this.value) return;
        //add a new item to list
        const newItemText = this.value;
        const newItem = document.createElement('li');
        newItem.innerText = newItemText;
        itemsUL.appendChild(newItem);
        //clear input
        this.value = '';
    }
})



// ------------------------------------------------------------ //
//Form Events

const form = document.querySelector('#signup-form');

const creditCardInput = document.querySelector('#cc');
const termsCheckbox = document.querySelector('#terms')
const veggieSelect = document.querySelector('#veggie')

// form.addEventListener('submit', function(e) {
//     alert('SUBMITTED THE FORM');
//     console.log('cc', creditCardInput.value)
//     console.log('terms', termsCheckbox.checked)
//     console.log('veggies', veggieSelect.value)
//     e.preventDefault();
// })

const formData = {};
for (let input of [creditCardInput, termsCheckbox, veggieSelect]) {
    input.addEventListener('input', ({target}) => {
       const {name, type, value, checked} = target; 
       formData[name] = type === 'checkbox' ? checked : value;
       console.log(formData);
    });
}

// LONG SOLUTION:
// creditCardInput.addEventListener('input', (e) => {
//     console.log('CC CHANGED!', e);
//     formData['cc'] = e.target.value;
// })

// veggieSelect.addEventListener('input', (e) => {
//     console.log('VEGGIE CHANGED!', e);
//     formData['veggie'] = e.target.value;
// })

// termsCheckbox.addEventListener('input', (e) => {
//     console.log('CHECKBOX CHANGED!', e);
//     formData['agreeToTerms'] = e.target.checked;
// })