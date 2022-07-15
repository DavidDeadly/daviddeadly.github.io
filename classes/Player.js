export default class Player {
  constructor(name) {
    this.name = name;
    this.prize = 0;
  }

  win(cards) {
    const cardsTotalPrize = cards.reduce(
      (sum, card) => sum + card.getCardPrize,
      0
    );
    this.prize += cardsTotalPrize + 1000;
  }
}
