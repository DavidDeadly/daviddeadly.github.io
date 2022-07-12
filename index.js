const { cardGenerator } = require('./funcs/cardGenerator');

const cards = cardGenerator();

// console.log(cards[0].getCardValue);
// console.log(cards[0].alreadyThrown());
// console.log(cards[0].getCardValue);

console.log(cards);
