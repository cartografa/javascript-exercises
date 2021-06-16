function pickRandom(arr) {
    const index = Math.floor(Math.random() * arr.lenght);
    return arr[index]
}


function getCard() {
    const values = [
        'A', 
        '2', 
        '3', 
        '4', 
        '5', 
        '6', 
        '7', 
        '8', 
        '9', 
        '10', 
        'J', 
        'Q', 
        'K'
    ];
    const suits = [
        'clubs',
        'spades',
        'hearts',
        'diamonds'
    ]

    return { value: pickRandom(values), suit: pickRandom(suits) };
}

