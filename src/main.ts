import './style.css';
import { createElement } from './utils/createElement';

const app = document.querySelector<HTMLDivElement>('#app');

const mainElement = createElement('main', {
  childElements: [
    createElement('img', {
      src: '../assets/morty.png',
      className: 'img--left',
    }),
    createElement('div', {
      className: 'header',
      childElements: [
        createElement('h1', {
          innerText: 'Rick and Morty',
          className: 'header__heading',
        }),
        createElement('input', {
          placeholder: 'Search for a character...',
          className: 'header__search',
        }),
      ],
    }),
    createElement('img', {
      src: '../assets/rick.png',
      className: 'img--right',
    }),
  ],
});

if (app !== null) {
  app.append(mainElement);
}
