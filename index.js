import Player from './classes/Player.js';
import game from './funcs/game.js';
import cardGenerator from './funcs/cardGenerator.js';
import { $, toggelEl, createEl } from './funcs/utilDomFuncs.js';

// Elements
const playBtn = $('#playBtn'),
  divGame = $('#game');

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

playBtn.addEventListener('click', () => {
  toggelEl(playBtn);
  const h2 = createEl({
    tag: 'h2',
    text: "Let's play!!!",
    attributes: {
      id: 'gameTitle'
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
    text: 'Start Playing',
    attributes: {
      className: 'btns border_5 d_transition',
      id: 'startBtn'
    }
  });

  startGameBtn.addEventListener('click', setUpGame);

  input.addEventListener('keypress', (event) => {
    if (event.key === 'Enter') {
      setUpGame();
    }
  });

  divGame.classList.remove('gameStart');
  divGame.classList.add('useRegister');
  divGame.append(h2, label, input, startGameBtn);
});
