'use strict';

const lufthansa = {
  airline: 'Lufthansa',
  code: 'LH',
  bookings: [],
  book(flightNum, name) {
    console.log(
      `${name} booked a seat on ${this.airline} flight ${this.code} ${flightNum}`
    );
  },
};

lufthansa.book(239, 'Bart Kub');
lufthansa.book(222, 'Bart ssss');

const eurowings = {
  name: 'Eurowings',
  code: 'EW',
  bookings: [],
};

// const book = lufthansa.book;

// book.call(eurowings, 23, 'sara');

// const arr = [23, 'dupa'];

// book.call(eurowings, ...arr);

// const bookEW = book.bind(eurowings);
// const bookLH = book.bind(lufthansa);

// bookEW(23, 'williams');

// lufthansa.planes = 300;
// lufthansa.buyPlane = function () {
//   console.log(this);
//   this.planes++;
//   console.log(this.planes);
// };

// document
//   .querySelector('.buy')
//   .addEventListener('click', lufthansa.buyPlane.bind(lufthansa));

// const addTax = (rate, value) => value + value * rate;

// console.log(addTax(0.1, 200));

// const addVat = addTax.bind(null, 0.23);

// const addTaxRate = function (rate) {
//   return function (value) {
//     return value + value * rate;
//   };
// };

// console.log(addTaxRate(0.23)(100));

// const runOnce = function () {
//   console.log('This will never call again');
// };

// (function () {
//   console.log('This will never call again');
// })();

// (() => console.log('This will never call again'))();

const passeng = function (n, wait) {
  const perGroup = n / 3;

  setTimeout(function () {
    console.log();
  }, 1000);
  console.log(`Wait start boarding in ${wait}`);
};
