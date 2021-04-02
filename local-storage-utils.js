import { findById } from './utils.js';

const CART = 'CART';

export function getCart() {
    const stringCart = localStorage.getItem(CART);
    const parsedCart = JSON.parse(stringCart);

    if (parsedCart) {
        return parsedCart;
    } else {
        return [];
    }
}

export function setCart(parsedCart) {
    const stringCart = JSON.stringify(parsedCart);

    localStorage.setItem(CART, stringCart);
}

export function addItemToCart(productId) {
    const cart = getCart();
    
    const matchingItem = findById(cart, productId);

    if (matchingItem) {
        matchingItem.quantity++;
    } else {
        const item = {
            id: productId,
            quantity: 1
        };

        cart.push(item);
    }

    setCart(cart);
}