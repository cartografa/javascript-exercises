const palabras = [
    'caño', 
    'pelo', 
    'taco', 
    'aro', 
    'canario', 
    'paño'
];

const todasCuatroLetras = palabras.every(p => p.length === 4);
const todasTerminanEnO = palabras.every(p => {
    const last = p.length - 1;
    return p[last] === 'o'
})

const algunaCuatroLetras = palabras.some(p => p.length === 4);

