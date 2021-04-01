export function findById(anArray, id) {
    for (let item of anArray) {
        if (item.id === id) {
            return item;
        }
    }
}




export function presentItem(paramItem) {
    const li = document.createElement('li');
    li.classList.add('item');
    li.style.background = paramItem.color;

    const pName = document.createElement('p');
    pName.classList.add('name');

    const nameStrong = document.createElement('strong');
    nameStrong.textContent = paramItem.name;

    pName.append(nameStrong);

    const pType = document.createElement('p');
    pType.classList.add('type');
    pType.textContent = paramItem.type;

    const sAttunement = document.createElement('span');
    sAttunement.classList.add('attunement');
    sAttunement.textContent = paramItem.attunement ? 'Attunement required' : 'Attunement not required' ;

    const image = document.createElement('img');
    image.classList.add('item-image');
    image.src = paramItem.image;
    image.alt = paramItem.name;
    
    const description = document.createElement('div');
    description.classList.add('hidden');
    description.classList.add('description');
    description.textContent = paramItem.description;

    const price = document.createElement('p');
    price.classList.add('price');
    price.textContent = `${paramItem.price} gold`;

    const button = document.createElement('button');
    button.textContent = 'Purchase';

    

    li.addEventListener('mouseenter', () => {
        description.classList.remove('hidden');
        li.classList.add('fixed');
    });
    li.addEventListener('mouseleave', () => {
        description.classList.add('hidden');
        li.classList.remove('fixed');
    });
    li.append(pName, pType, sAttunement, image, description, price, button);

    return li;
}

export function createTablerow(someCartItem, someItem) {
    const tr = document.createElement('tr');
    const tdName = document.createElement('td');
    const tdQuantity = document.createElement('td');
    const tdPrice = document.createElement('td');

    tdName.textContent = someItem.name;
    tdQuantity.textContent = someCartItem.quantity;
    const total = someItem.price * someCartItem.quantity;

    tdPrice.textContent = `${total} gold.`;

    tr.append(tdName, tdQuantity, tdPrice);

    return tr;
}

export function createTotalRow(cartArray, itemArray) {
    let sum = 0;

    for (let cartItem of cartArray) {
        
        const matchingItem = findById(itemArray, cartItem.id);

        const lineItem = matchingItem.price * cartItem.quantity;

        sum = sum + lineItem;
    }

    const tr = document.createElement('tr');

    const td1 = document.createElement('td');
    const td2 = document.createElement('td');
    const td3 = document.createElement('id');

    td3.textContent = `${sum}`;

    tr.append(td1, td2, td3);
    return tr;
}