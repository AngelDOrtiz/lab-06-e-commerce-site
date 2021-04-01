// IMPORT MODULES under test here:
// import { example } from '../example.js';

import { findById } from '../utils.js';
import { magicItem } from '../items.js';

const test = QUnit.test;

test('take in an array and return an item with matching ID', (expect) => {
    //Arrange
    // Set up your arguments and expectations
    const expected = {
        id: 1,
        name: 'Mithral Armor',
        type: 'Armor',
        rarity: 'Uncommon',
        attunement: false,
        description: 'Mithral is a light, flexible metal. A mithral chain shirt or breastplate can be worn under normal clothes.',
        color: 'lightgreen',
        price: '500',
        image: 'https://i.pinimg.com/originals/e3/4a/c4/e34ac4f1c0d929a9a71361ef5d267aab.jpg'
    };
    
    //Act 
    // Call the function you're testing and set the result to a const
    const actual = findById(magicItem, expected.id);

    //Expect
    // Make assertions about what is expected versus the actual result
    expect.deepEqual(actual, expected);
});
