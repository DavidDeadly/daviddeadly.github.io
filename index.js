import setUpGame from './funcs/setUpGame.js';
import { $, hideEl, createEl } from './funcs/utilDomFuncs.js';
import { cleanGameScreen } from './funcs/game.js';

// Elements
const playBtn = $('#playBtn'),
  divGame = $('#game');

playBtn.addEventListener('click', () => {
  hideEl(playBtn);
  const h2 = createEl({
    tag: 'h2',
    text: "LET'S PLAY!!",
    attributes: {
      id: 'gameTitle'
    }
  });
  const input = createEl({
    tag: 'input',
    attributes: { id: 'inputName', className: 'border_5' }
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

  startGameBtn.addEventListener('click', () => {
    try {
      cleanGameScreen();
    } catch (error) {
      console.error(error);
    }
    setUpGame();
  });

  input.addEventListener('keypress', (event) => {
    if (event.key === 'Enter') {
      setUpGame();
    }
  });

  divGame.classList.remove('gameStart');
  divGame.classList.add('useRegister');
  divGame.append(h2, label, input, startGameBtn);
});
