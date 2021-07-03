/* STYLE PROPERTY
Sirve para cambiar estilos pero no para leerlos
(a menos que el elemento tengo los estilos en línea)
Los nombres de las propiedades de estilos van en
camelCase. */

h1 = document.querySelector('h1')
h1.style.color = 'teal'

p = document.querySelectorAll('p')
p.style.color = 'white'
p.style.backgroundColor = 'black'

const allLis = document.querySelectorAll('li');
const colors = ['red', 'orange', 'yellow', 'green', 'blue', 'purple']

allLis.forEach((li, i) => {
    const color = colors[i];
    li.style.color = color;
})

