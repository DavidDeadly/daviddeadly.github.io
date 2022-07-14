import Player from './classes/Player.js';
import game from './funcs/game.js';
import cardGenerator from './funcs/cardGenerator.js';

// utility functions
const $ = (query) => document.querySelector(query),
  toggelEl = (element) =>
    element.style.display === ''
      ? (element.style.display = 'none')
      : (element.style.display = ''),
  createEl = ({ tag, text, attributes }) => {
    const el = document.createElement(tag);
    const content = text && document.createTextNode(text);
    text && el.appendChild(content);

    attributes &&
      Object.keys(attributes).forEach((value) => {
        el[value] = attributes[value];
      });
    return el;
  };

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
      htmlFor: 'inputName'
    }
  });
  const startGameBtn = createEl({
    tag: 'button',
    text: 'Start game'
  });

  startGameBtn.addEventListener('click', () => {
    if (!input.value) {
      console.error('YOU NEED A NAME!!!');
      return;
    }
    setUpGame(input.value);
  });

  divGame.append(h2);
  divGame.append(label);
  divGame.append(input);
  divGame.append(startGameBtn);
});
