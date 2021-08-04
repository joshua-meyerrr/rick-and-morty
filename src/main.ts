import { createCharacterCard } from './components/characters/character';
import './style.css';
import { Character } from './types';
import { createElement } from './utils/createElement';

const app = document.querySelector<HTMLDivElement>('#app');

const character: Character = {
  name: 'Rick Sanchez',
  thumbnail: 'https://rickandmortyapi.com/api/character/avatar/1.jpeg',
  status: 'Alive',
  species: 'Human',
  location: 'Earth (C-137)',
  origin: 'Earth (Replacement Dimension)',
};

const mainElement = createElement('main', {
  childElements: [
    createElement('div', {
      className: 'headerDiv',
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
    }),
    createElement('div', {
      className: 'characterContainer',
      childElements: [
        createCharacterCard(character),
        createCharacterCard(character),
        createCharacterCard(character),
        createCharacterCard(character),
        createCharacterCard(character),
        createCharacterCard(character),
      ],
    }),
  ],
});

if (app !== null) {
  app.append(mainElement);
}
