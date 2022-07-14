import Card from '../classes/Card.js';

const cardGenerator = () => {
  const cards = [
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
    'K',
    'Q',
    'J'
  ];
  const suits = ['♣️', '♥', '♠', '♦'];

  const allCards = [];

  for (let i = 0; i < suits.length; i++) {
    const currentSuit = suits[i];
    const cardsBySuit = cards.map((c) => {
      if (!/\d/.test(c)) {
        return new Card(c, 10, currentSuit);
      }
      return new Card(c, Number(c), currentSuit);
    });

    allCards.push(cardsBySuit);
  }

  return allCards.flat().sort(() => 0.5 - Math.random());
};

export default cardGenerator;
