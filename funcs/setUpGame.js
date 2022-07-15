import Player from '../classes/Player.js';
import cardGenerator from './cardGenerator.js';
import { $ } from './utilDomFuncs.js';
import game from './game.js';

const setUpGame = () => {
  const input = $('#inputName');
  const name = input.value;
  if (!name) {
    alert('YOU NEED A NAME!!!');
    return;
  }
  const cards = cardGenerator();
  const player = new Player(name);
  game(player, cards);
};

export default setUpGame;
