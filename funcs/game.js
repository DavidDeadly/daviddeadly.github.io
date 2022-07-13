const { cardGenerator } = require('./cardGenerator');

const presentCard = ([card]) => {
  console.log(`
    ${'_'.repeat(card.name.length + 4 + card.suit.length)}
    |${card.name}//${card.suit}|`);
};

const game = (player, consoleInput) => {
  console.clear();
  console.log(`Hi ${player.name} Welcome to Sofka Black jack!!\n`);

  const cards = cardGenerator();
  let roundCards = [];

  const askForPlayAgain = () => {
    consoleInput.question('Do you want to play again? [Y]/[N]', (ans) => {
      if (ans.toUpperCase() !== 'Y') process.exit();
      game(player, consoleInput);
    });
  };

  const getCard = () => {
    if (!cards.length) {
      console.log("There's no more cards!");
      process.exit();
    }
    const index = Math.floor(Math.random() * cards.length);
    const card = cards.splice(index, 1);
    roundCards = roundCards.concat(card);
    presentCard(card);
  };

  const sumAndAsk = () => {
    const totalSum = roundCards.reduce(
      (sum, card) => sum + card.getCardValue,
      0
    );

    console.log(`\nThe current sum is ${totalSum}\n`);

    if (totalSum >= 18 && totalSum <= 21) {
      console.log(totalSum === 21 ? 'BLACKJAAAACK!!!' : 'YOU WIN!!!!!');
      askForPlayAgain();
    } else if (totalSum > 21) {
      console.log('YOU LOSEEEEE!!! Sorry :cc');
      process.exit();
    } else {
      consoleInput.question('Do you want another card?? [Y]/[N]', (ans) => {
        if (ans.toUpperCase() !== 'Y') return;
        getCard();
        sumAndAsk();
      });
    }
  };

  console.log('Here are your initial cards!!');
  getCard();
  getCard();

  sumAndAsk();
  askForPlayAgain();
};

module.exports = {
  game
};
