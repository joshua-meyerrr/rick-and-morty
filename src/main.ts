import { createCharacterCard } from './components/characters/character';
import './style.css';
import { Character } from './types';
import { createElement } from './utils/createElement';
import { getCharacter } from './utils/api';

const characters: Character[] = await getCharacter();
console.log(characters);
const app = document.querySelector<HTMLDivElement>('#app');

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
      childElements: characters.map((character) =>
        createCharacterCard(character)
      ),
    }),
  ],
});

if (app !== null) {
  app.append(mainElement);
}
