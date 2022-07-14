import Player from './classes/Player.js';
import game from './funcs/game.js';
import cardGenerator from './funcs/cardGenerator.js';

const playBtn = document.querySelector('#playBtn');

const setUpGame = (name) => {
  const cards = cardGenerator();
  const player = new Player(name);
  game(player, cards);
};

playBtn.addEventListener('click', () => {
  alert('You started a new game!!');
});
