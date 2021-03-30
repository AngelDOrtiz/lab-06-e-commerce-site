// import functions and grab DOM elements
import { magicItem } from './items.js';
import { presentItem } from './utils.js';

const ul = document.getElementById('list');

for (let item of magicItem) {
    const li = presentItem(item);

    ul.append(li);
}

// set event listeners to update state and DOM