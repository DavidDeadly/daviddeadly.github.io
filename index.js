const { stdin, stdout } = require('process');
const readLine = require('readline');
const { Player } = require('./classes/Player');
const { game } = require('./funcs/game');

const consoleInput = readLine.createInterface({
  input: stdin,
  output: stdout
});

const setUpGame = (name) => {
  const player = new Player(name);
  game(player, consoleInput);
};

consoleInput.question("What's your name??\n", setUpGame);
