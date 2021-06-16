// usar una variable como key

const rol = "Director";
const persona = 'Hayao Miyazaki';
const rol2 = 'Pintor';
const persona2 = 'Pierre Bonnard';

const team = {
    [rol]: persona,
    [rol2]: persona2,
}

// function addProperty (obj, k, v) {
//     const copy = {...obj};
//     copy[k] = v;
//     return copy;
// }
// const res = addProp(team, 'smiley', ':)')

const addProp = (obj, k, v) => {
    return {...obj, [k]: v}
}


