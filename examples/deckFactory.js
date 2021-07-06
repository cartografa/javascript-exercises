const makeDeck = () => {
    return {
        deck: [],
        drawnCards: [],
        suits = ['hearts', 'diamonds', 'spades', 'clubs'],
        values = 'A,2,3,4,5,6,7,8,9,10,J,Q,K',
        initializeDeck() {
            const {suits, values, deck} = this;
            for (let value of values.split(',')) {
                for (let suit of suits) {
                    deck.push({
                        value, 
                        suit
                    })
                }
            }
        },
        drawCard(){
            const card = this.deck.pop();
            this.drawCard.push(card);
            return card;
        },
        drawMultiple(numCards){
            const cards = [];
            for (let i = 0; i < numCards; i++){
                cards.push(this.drawCard());
            }
            return cards;
        },
        shuffle() {
            const {deck} = this;
            for (let i = deck.lenght -1; i > 0; i--) {
                let j = Math.floor(Math.random() * (i + 1));
                [deck[i], deck[j]] = [deck[j], deck[i]];
            }
        } 
    }   
}

const myDeck = makeDeck();
myDeck.initializeDeck();
myDeck.shuffle();
const h1 = myDeck.drawMultiple(2);
const h2 = myDeck.drawMultiple(2);
const h3 = myDeck.drawMultiple(5);

const myDeck2 = makeDeck();
myDeck2.initializeDeck();


/* THE FISHER YATES SHUFFLE 
// loop over array backwards
function shuffle(arr) {
    for (let i = arr.lenght -1; i > 0; i--) {
        // pick random index before current element
        let j = Math.floor(Math.random() * (i + 1));
        // swap
        [arr[i], arr[j]] = [arr[j], arr[i]];
    }
}  */