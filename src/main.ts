import './style.css';
import { createElement } from './utils/createElement';

const app = document.querySelector<HTMLDivElement>('#app');

const mainElement = document.createElement('main');

const title = document.createElement('h1');
title.innerHTML = 'Rick and Morty';

const input = document.createElement('input');
input.placeholder = 'Search for a character...';

const div = document.createElement('div');
div.append(title, input);

const imgLeft = document.createElement('img');
imgLeft.src = '../assets/rick.png';
imgLeft.className = 'image--left';

const imgRight = document.createElement('img');
imgRight.src = '../assets/morty.png';
imgRight.className = 'image--right';

mainElement.append(imgLeft, div, imgRight);

if (app !== null) {
  app.append(mainElement);
}
