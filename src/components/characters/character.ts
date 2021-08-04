import { createElement } from '../../utils/createElement';
import './character.css';
import type { Character } from '../../types';

export function createCharacterCard({
  thumbnail,
  name,
  status,
  species,
  location,
  origin,
}: Character): HTMLElement {
  return createElement('article', {
    className: 'card',
    childElements: [
      createElement('img', {
        src: thumbnail,
        className: 'card__img',
      }),
      createElement('div', {
        className: 'card__content',
        childElements: [
          createElement('section', {
            className: 'card__character',
            childElements: [
              createElement('h2', {
                innerText: name,
                className: 'character__name',
              }),
              createElement('div', {
                className: 'character__status',
                childElements: [
                  createElement('span', {
                    className: 'status__icon',
                    innerText: status === 'Alive' ? '🟢' : '🔴',
                  }),
                  createElement('p', {
                    className: 'status__text',
                    innerText: `${status} - ${species}`,
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
                innerText: location,
              }),
            ],
          }),
          createElement('section', {
            className: 'character__origin',
            childElements: [
              createElement('p', {
                className: 'origin__headline',
                innerText: 'Origin:',
              }),
              createElement('p', {
                innerText: origin,
                className: `origin__actual`,
              }),
            ],
          }),
        ],
      }),
    ],
  });
}
