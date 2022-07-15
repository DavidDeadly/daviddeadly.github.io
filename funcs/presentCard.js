import { $, createEl } from './utilDomFuncs.js';

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

export default presentCard;
