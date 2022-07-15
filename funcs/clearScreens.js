import { $, hideEl } from './utilDomFuncs.js';

export const cleanGameScreen = () => {
  [$('#divCards'), $('#msgSum'), $('#msg'), $('#prize')].forEach((e) =>
    e.remove()
  );
};

export const clearSetUpScreen = () => {
  const input = $('#inputName'),
    label = $('#labelName'),
    startBtn = $('#startBtn');
  hideEl(input);
  hideEl(label);
  hideEl(startBtn);
};
