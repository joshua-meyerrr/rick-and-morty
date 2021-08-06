import { createCharacterCard } from './components/characters/character';
import './style.css';
import type { Character } from './types';
import { createElement } from './utils/createElement';
import { getCharacter } from './utils/api';

const characters: Character[] = await getCharacter();
console.log(characters);

const characterContainer = createElement('div', {
  className: 'characterContainer',
  childElements: characters.map((character) => createCharacterCard(character)),
});

const searchbar = createElement('input', {
  placeholder: 'Search for a character...',
  className: 'header__search',
  oninput: async () => {
    characterContainer.innerHTML = '';
    const filteredCharacters: Character[] = await getCharacter(searchbar.value);
    const filteredCreatedCards = filteredCharacters.map((character) =>
      createCharacterCard(character)
    );
    characterContainer.append(...filteredCreatedCards);
  },
});

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
            searchbar,
          ],
        }),
        createElement('img', {
          src: '../assets/rick.png',
          className: 'img--right',
        }),
      ],
    }),
    characterContainer,
  ],
});

const app = document.querySelector<HTMLDivElement>('#app')?.append(mainElement);
