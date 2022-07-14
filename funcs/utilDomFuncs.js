// utility functions
export const $ = (query) => document.querySelector(query);

export const toggelEl = (element) =>
  element.style.display === ''
    ? (element.style.display = 'none')
    : (element.style.display = '');

export const createEl = ({ tag, text, attributes }) => {
  const el = document.createElement(tag);
  const content = text && document.createTextNode(text);
  text && el.appendChild(content);

  attributes &&
    Object.keys(attributes).forEach((value) => {
      el[value] = attributes[value];
    });
  return el;
};
