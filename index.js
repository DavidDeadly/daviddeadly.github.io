import Player from './classes/Player.js';
import game from './funcs/game.js';
import cardGenerator from './funcs/cardGenerator.js';
import { $, toggelEl, createEl } from './funcs/utilDomFuncs.js';

// Elements
const playBtn = $('#playBtn'),
  divGame = $('#game');

const setUpGame = (name) => {
  const cards = cardGenerator();
  const player = new Player(name);
  console.log(player);
  console.log(cards);
  // game(player, cards);
};

playBtn.addEventListener('click', () => {
  toggelEl(playBtn);
  const h2 = createEl({
    tag: 'h2',
    text: "Game's about started!!!",
    attributes: {
      id: 'gameStartTitle'
    }
  });
  const input = createEl({
    tag: 'input',
    attributes: { id: 'inputName' }
  });
  const label = createEl({
    tag: 'label',
    text: 'Your name:',
    attributes: {
      htmlFor: 'inputName',
      id: 'labelName'
    }
  });
  const startGameBtn = createEl({
    tag: 'button',
    text: 'Start game',
    attributes: {
      className: 'btns border_5 d_transition'
    }
  });

  startGameBtn.addEventListener('click', () => {
    if (!input.value) {
      alert('YOU NEED A NAME!!!');
      return;
    }
    setUpGame(input.value);
  });

  divGame.classList.remove('gameStart');
  divGame.classList.add('useRegister');
  divGame.append(h2);
  divGame.append(label);
  divGame.append(input);
  divGame.append(startGameBtn);
});
