import './style.css';

const app = document.querySelector<HTMLDivElement>('#app');

const mainElement = document.createElement('main');

const title = document.createElement('h1');
title.innerHTML = 'Rick and Morty';

mainElement.append(title);

if (app !== null) {
  app.append(mainElement);
}
