import { magicItem } from '../items.js';
import { findById } from '../utils.js';
import { cart } from './cart-data.js';
import { createTablerow, createTotalRow } from '../utils.js';



const table = document.querySelector('table');

for (let cartItem of cart) {
    
    const matchingItem = findById(magicItem, cartItem.id);
    /*console.log(matchingItem);*/
    const tr = createTablerow(cartItem, matchingItem);
    console.log(tr);
    table.append(tr);

    
}

const totalRow = createTotalRow(cart, magicItem);

table.append(totalRow);