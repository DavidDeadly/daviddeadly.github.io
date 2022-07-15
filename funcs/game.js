import Card from '../classes/Card.js';
import cardGenerator from './cardGenerator.js';
import { $, hideEl, createEl, appearEl } from './utilDomFuncs.js';

const divGame = $('#game');

export const cleanGameScreen = () => {
  [$('#divCards'), $('#msgSum'), $('#msg'), $('#prize')].forEach((e) =>
    e.remove()
  );
};

const presentCard = (card) => {
  const cardDiv = createEl({
    tag: 'div',
    attributes: {
      className: 'card border_5'
    }
  });

  const name = createEl({ tag: 'h6', text: card.name });
  const suit = createEl({ tag: 'h6', text: card.suit });

  const divCards = $('#divCards');
  cardDiv.append(name, suit);
  divCards.append(cardDiv);
};

const clearSetUpScreen = () => {
  const input = $('#inputName'),
    label = $('#labelName'),
    startBtn = $('#startBtn');
  hideEl(input);
  hideEl(label);
  hideEl(startBtn);
};

const game = (player, cards) => {
  clearSetUpScreen();
  const roundCards = [];

  const gameTitle = $('#gameTitle');
  const playAgainBtn = $('#startBtn');
  playAgainBtn.innerText = 'Play again';

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

  const divCards = createEl({
    tag: 'div',
    attributes: {
      id: 'divCards'
    }
  });

  const msgSum = createEl({
    tag: 'h3',
    attributes: {
      id: 'msgSum',
      className: 'border_5'
    }
  });

  const divBtns = createEl({
    tag: 'div',
    attributes: {
      id: 'divBtns'
    }
  });

  const nextRoudBtn = createEl({
    tag: 'button',
    text: 'Next Round',
    attributes: {
      className: 'btns border_5 d_transition',
      id: 'nextBtn'
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
  divBtns.append(nextRoudBtn, drawCardBtn);

  divGame.append(divCards, msgSum, message, prize, divBtns);

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
    drawCardBtn.disabled = true;
    nextRoudBtn.disabled = false;

    if (totalSum >= 18 && totalSum <= 21) {
      message.innerText = totalSum === 21 ? 'BLACKJAAAACK!!!' : 'YOU WIN!!!!!';
      player.win(roundCards);
      prize.innerText = `Your current prize is ${player.prize}`;
    } else if (totalSum > 21) {
      message.innerText = 'YOU LOSEEEEE!!! Sorry :cc';
      prize.innerText = `This is your total score: ${player.prize}`;
      divBtns.remove();
      appearEl(playAgainBtn);
      divGame.append(playAgainBtn);
    } else {
      drawCardBtn.disabled = false;
      nextRoudBtn.disabled = true;
    }
  };

  drawCardBtn.addEventListener('click', () => {
    gameTitle.innerText = 'Cards:';
    getCard();
    sumAndAsk();
  });

  nextRoudBtn.addEventListener('click', () => {
    [divCards, msgSum, message, prize, divBtns].forEach((e) => e.remove());
    game(player, cardGenerator());
  });

  getCard();
  getCard();

  sumAndAsk();
};

export default game;
