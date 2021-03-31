import { magicItem } from '../items.js';
import { findById } from '../utils.js';
import { cart } from './cart-data.js';
import { createTablerow, createTotalRow } from '../utils.js';



const table = document.querySelector('table');

for (let cartItem of cart) {
    
    const matchingItem = findById(magicItem, cartItem.id);

    const tr = createTablerow(cartItem, matchingItem);

    table.append(tr);

    console.log ()
}

const totalRow = createTotalRow(cart, magicItem);

table.append(totalRow);