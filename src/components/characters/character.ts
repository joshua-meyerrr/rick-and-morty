import { createElement } from '../../utils/createElement';
import './character.css';

export function createCharacterCard(character): HTMLElement {
  return createElement('article', {
    className: 'card',
    childElements: [
      createElement('img', {
        src: character.thumbnail,
        className: 'card__img',
      }),
      createElement('div', {
        className: 'card__content',
        childElements: [
          createElement('section', {
            className: 'card__character',
            childElements: [
              createElement('h2', {
                innerText: character.name,
                className: 'character__name',
              }),
              createElement('div', {
                className: 'character__status',
                childElements: [
                  createElement('span', {
                    className: 'status__icon',
                    innerText: '💀',
                  }),
                  createElement('p', {
                    className: 'status__text',
                    innerText: `${character.status} - ${character.species}`,
                  }),
                ],
              }),
            ],
          }),
          createElement('section', {
            className: 'character__location',
            childElements: [
              createElement('p', {
                className: 'location__headline',
                innerText: 'Last known location:',
              }),
              createElement('p', {
                className: 'location__actual',
                innerText: character.location,
              }),
            ],
          }),
          createElement('section', {
            className: 'character__seenIn',
            childElements: [
              createElement('p', {
                className: 'seenIn__headline',
                innerText: 'First seen in:',
              }),
              createElement('p', {
                innerText: character.seenIn,
                className: `location__actual`,
              }),
            ],
          }),
        ],
      }),
    ],
  });
}
