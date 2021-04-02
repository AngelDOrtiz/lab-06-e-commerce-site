import { magicItem } from '../items.js';
import { findById } from '../utils.js';
import { getCart } from '../local-storage-utils.js';
import { createTablerow, createTotalRow } from '../utils.js';
const purchaseButton = document.getElementById('purchaseButton');

const cart = getCart();
const table = document.querySelector('table');

for (let cartItem of cart) {
    
    const matchingItem = findById(magicItem, cartItem.id);
    
    const tr = createTablerow(cartItem, matchingItem);
    
    table.append(tr);

    
}

const totalRow = createTotalRow(cart, magicItem);

table.append(totalRow);

purchaseButton.addEventListener('click', () => {
    const cart = getCart();
    alert('feature coming soon');

    localStorage.clear();
    window.location = '/';
});