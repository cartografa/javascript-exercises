// DESTRUCTURING ARRAYS:
// unpack specific values into out of an array 
// into a variable.

const raceResults = [
    'Hayao Miyazaki',
    'Charles Baudelaire',
    'Ursula K. Le Guin',
    'Alfred Jarry'
]

const [gold, silver, bronze] = raceResults;

//SKIP INDEXES WITH COMMAS
const [first, , , fourth] = raceResults;

//COLLECT THE REMAINING 
const [winner, ...others] = raceResults;

/*********************************************/
// DESTRUCTURING OBJECTS

const runner = {
    first: "Hayao",
    last: "Miyazaki",
    country: "Japan",
    title: "The Grumpy Genius Animator"
}

const {first, last} = runner;

// RENAMING THE VARIABLE
const {
    country: nation,
    title: honorific   
} = runner;

// COLLECTING THE REST 
const {
    first,
    last,
    ...other
} = runner

/*********************************************/
// NESTED DESTRUCTURING

const results = [{
        first: "Hayao",
        last: "Miyazaki",
        country: "Japan"
    },
    {
        first: "Charles",
        last: "Baudelaire",
        country: "France"  
    },
    {
        first: "Ursula",
        last: "Le Guin",
        country: "USA"
    }
]

// getting Hayao & France:
const [{first: goldWinner},{country}] = results

/*********************************************/
// DESTRUCTURING PARAMETERS

const fullName = ({first, last}) => {
    return `${last}, ${first} `
}

const response = [
    'HTTP/1.1',
    '200 OK',
    'application/json',
]

function parseResponse([protocol, statusCode, contentType]) {
    console.log(`Status: ${statusCode}`)
}