'use strict';

let lastName = 'Williams';
let old = lastName;
lastName = 'davies';

console.log(lastName);
console.log(old);

const jessica = {
  name: 'Jessica',
  lastName: 'Williams',
};

const jessicaCopy = Object.assign({}, jessica); // shallow copy
