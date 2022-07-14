import Card from '../classes/Card.js';
import { $, toggelEl, createEl } from './utilDomFuncs.js';

const divGame = $('#game');

const presentCard = (card) => {
  // TODO: show suits
  // TODO: show suits
  // TODO: show suits

  const msgCards = $('#msgCards');
  msgCards.innerText += `${card.name}, `;
};

const clearSetUpScreen = () => {
  const input = $('#inputName'),
    label = $('#labelName'),
    startBtn = $('#startBtn');
  toggelEl(input);
  toggelEl(label);
  toggelEl(startBtn);
};

const game = (player, cards) => {
  clearSetUpScreen();
  const roundCards = [];

  const gameTitle = $('#gameTitle');
  gameTitle.innerText = 'Here are your initial cards!!';

  const message = createEl({
    tag: 'h4',
    text: `Do you want another card, ${player.name}?`,
    attributes: {
      id: 'msg'
    }
  });
  const prize = createEl({
    tag: 'span',
    text: `Your current prize is ${player.prize}`,
    attributes: {
      id: 'prize'
    }
  });
  const msgCards = createEl({
    tag: 'h3',
    text: 'Cards: ',
    attributes: {
      id: 'msgCards'
    }
  });

  const msgSum = createEl({
    tag: 'h3',
    attributes: {
      id: 'msgSum'
    }
  });

  const divBtns = createEl({
    tag: 'div',
    attributes: {
      id: 'divBtns'
    }
  });

  const restartGameBtn = createEl({
    tag: 'button',
    text: 'Play Again',
    attributes: {
      className: 'btns border_5 d_transition',
      id: 'restartBtn'
    }
  });

  const drawCardBtn = createEl({
    tag: 'button',
    text: 'Draw card',
    attributes: {
      className: 'btns border_5 d_transition',
      id: 'drawBtn'
    }
  });

  drawCardBtn.disabled = true;
  divBtns.append(restartGameBtn, drawCardBtn);

  divGame.append(msgCards, msgSum, message, prize, divBtns);

  // const askForPlayAgain = () => {
  //   consoleInput.question('Do you want to play again? [Y]/[N]', (ans) => {
  //     if (ans.toUpperCase() !== 'Y') {
  //       console.log(`This is your total score: ${player.prize}\n`);
  //       process.exit();
  //     }
  //     game(player, consoleInput);
  //   });
  // };

  const getCard = () => {
    const index = Math.floor(Math.random() * cards.length);
    const [card] = cards.splice(index, 1);
    if (card.name === 'A') Card.nerfAces(cards, card.suit);
    roundCards.push(card);
    presentCard(card);
  };

  const sumAndAsk = () => {
    const totalSum = roundCards.reduce(
      (sum, card) => sum + card.getCardValue,
      0
    );

    msgSum.innerText = `Sum: ${totalSum}`;

    if (totalSum >= 18 && totalSum <= 21) {
      message.innerText = totalSum === 21 ? 'BLACKJAAAACK!!!' : 'YOU WIN!!!!!';
      player.win();
      prize.innerText = `Your current prize is ${player.prize}`;
      // askForPlayAgain();
    } else if (totalSum > 21) {
      message.innerText = 'YOU LOSEEEEE!!! Sorry :cc';
      prize.innerText = `This is your total score: ${player.prize}`;
    } else {
      drawCardBtn.disabled = false;
    }
  };

  drawCardBtn.addEventListener('click', () => {
    getCard();
    sumAndAsk();
  });

  getCard();
  getCard();

  sumAndAsk();
  // askForPlayAgain();
};

export default game;
