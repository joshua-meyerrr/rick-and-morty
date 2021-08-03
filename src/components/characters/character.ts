import { createElement } from '../../utils/createElement';

export function createCharacterCard() {
  return createElement('article', {
    className: 'character',
    childElements: [
      createElement('img', {
        src: 'https://rickandmortyapi.com/api/character/avatar/198.jpeg',
      }),
      createElement('section', {
        childElements: [
          createElement('h2', {
            innerText: 'Lady Katana',
            className: 'character__name',
          }),
          createElement('div', {
            className: 'character__status',
            childElements: [
              createElement('span', {
                className: 'status__icon',
                innerText: '😊',
              }),
              createElement('p', {
                className: 'status__text',
                innerText: `Dead - Humanoid`,
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
            innerText: 'Ricks home',
            className: 'location__actual',
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
            innerText: 'Interdimensional Cabel',
            className: 'seenIn__actual',
          }),
        ],
      }),
    ],
  });
}
