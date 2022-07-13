class Card {
  #value;

  constructor(name, value, suit) {
    this.name = name;
    this.suit = suit;
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

module.exports = {
  Card
};
