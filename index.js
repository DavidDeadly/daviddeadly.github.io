const { stdin, stdout } = require('process');
const readLine = require('readline');
const { Player } = require('./classes/Player');

const { cardGenerator } = require('./funcs/cardGenerator');

const consoleInput = readLine.createInterface({
  input: stdin,
  output: stdout
});

const presentCard = ([card]) => {
  console.log(`
    ${'_'.repeat(card.name.length + 4 + card.suit.length)}
    |${card.name}//${card.suit}|`);
};

const game = (player) => {
  const cards = cardGenerator();
  const roundCards = [];

  const getCard = () => {
    if (!cards.length) {
      console.log("There's no more cards!");
      process.exit();
    }
    const index = Math.floor(Math.random() * cards.length);
    const card = cards.splice(index, 1);
    roundCards.concat(card);
    presentCard(card);
  };

  console.log('Here are your initial cards!!');
  getCard();
  getCard();

  consoleInput.question('Do you want to play again? [Y]/[N]', (ans) => {
    if (ans.toUpperCase() !== 'Y') process.exit();
    game(player, cards);
  });
};

const setUpGame = (name) => {
  const player = new Player(name);
  console.log('Welcome to Sofka Black jack!!');

  game(player);
};

consoleInput.question("What's your name??\n", setUpGame);
