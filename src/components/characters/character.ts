import { createElement } from '../../utils/createElement';
import styles from './character.module.css';
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
    className: styles.card,
    childElements: [
      createElement('img', {
        src: thumbnail,
        className: styles.image,
      }),
      createElement('div', {
        className: styles.content,
        childElements: [
          createElement('section', {
            className: styles.character,
            childElements: [
              createElement('h2', {
                innerText: name,
                className: styles.character__name,
              }),
              createElement('div', {
                className: styles.character__status,
                childElements: [
                  createElement('span', {
                    className: styles.status__icon,
                    innerText: status === 'Alive' ? '🟢' : '🔴',
                  }),
                  createElement('p', {
                    className: styles.status__text,
                    innerText: `${status} - ${species}`,
                  }),
                ],
              }),
            ],
          }),
          createElement('section', {
            className: styles.character__location,
            childElements: [
              createElement('p', {
                className: styles.location__headline,
                innerText: 'Last known location:',
              }),
              createElement('p', {
                className: styles.location__actual,
                innerText: location,
              }),
            ],
          }),
          createElement('section', {
            className: styles.character__origin,
            childElements: [
              createElement('p', {
                className: styles.origin__headline,
                innerText: 'Origin:',
              }),
              createElement('p', {
                innerText: origin,
                className: styles.origin__actual,
              }),
            ],
          }),
        ],
      }),
    ],
  });
}
