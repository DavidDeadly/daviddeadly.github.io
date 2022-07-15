export default class Card {
  #value;

  #prize;

  constructor(name, value, suit) {
    const isLetter = Number.isNaN(Number(name));
    this.name = name;
    this.suit = suit;
    this.#prize = isLetter ? 500 : 100;
    if (name === 'A') {
      this.#value = 11;
      this.alreadyThrown = () => {
        this.#value = 1;
      };
    } else {
      this.#value = value;
    }
  }

  get getCardValue() {
    return this.#value;
  }

  get getCardPrize() {
    return this.#prize;
  }

  static nerfAces(cards, suit) {
    const x = cards
      .filter((c) => c.name === 'A')
      .map((c) => {
        if (c.suit !== suit) {
          c.alreadyThrown();
        }
        return c.getCardValue;
      });

    return x;
  }
}
