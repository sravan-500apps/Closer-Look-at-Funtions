'use strict';

const bookings = [];

const createBooking = function (
  flightNum,
  numpassengers = 1,
  price = 199 * numpassengers
) {
  // above  ES6 way of declaring default values
  //ES5 way of declaring default values
  //   numpassengers = numpassengers || 1;
  //   price = price || 199;
  const booking = {
    flightNum,
    numpassengers,
    price,
  };
  console.log(booking);
  bookings.push(booking);
};

createBooking('LH123');
createBooking('LH123', 2, 800);
createBooking('LH123', 5);
createBooking('LH123', undefined, 1050); // heare if we want to skip 2nd parameter with help of undefined we can

const flight = 'LH234';
const sravan = {
  name: 'sravan Manchikatla',
  passport: 24856262223,
};

const checkIn = function (flightNum, passenger) {
  flightNum = 'LH999';
  passenger.name = 'Mr. ' + passenger.name;

  if (passenger.passport === 24856262223) {
    alert('checked In');
  } else {
    alert('invaild Passport number');
  }
};

checkIn(flight, sravan);
console.log(flight);
console.log(sravan);

// is the same as doing
const flightNum = flight;
const passenger = sravan;

const newPassport = function (person) {
  person.passport = Math.trunc(Math.random(10000000000));
};
newPassport(sravan); // after calling newpassport function actual passport value which we decalred was changed with this new passport Number so o/p willl be 'invaild Passport number';
checkIn(flight, sravan);

// javasript  having passing by values  not passing by reference ,even though it looks like refernce
/*
// higer order  funtions////

// below are two genaric funtions
const oneWord = function (str) {
  return str.replace(/ /g, '').toLowerCase();
};

const UpperFrist = function (str) {
  const [first, ...others] = str.split(' ');
  return [first.toUpperCase(), ...others].join(' ');
};

// now higher order function
const trasformed = function (str, fn) {
  console.log(`original string : ${str}`);
  console.log(`Transformed String : ${fn(str)}`);

  console.log(`Transformed by : ${fn.name}`);
};
trasformed('javascript is the best ', UpperFrist);

trasformed('javascript is the best ', oneWord);

// JS uses callbacks all the time
// this callback functions alllows us to create abstructions

const high5 = function () {
  console.log('🖐');
};

document.body.addEventListener('click', high5);

['sravan', 'Bunty', 'chitti'].forEach(high5);
*/
///Functions returing Functions

const greet = function (greeting) {
  return function (name) {
    console.log(`${greeting} ${name}`);
  };
};

const greterHey = greet('Hey');
greterHey('sravan');
greterHey('Bunty');

greet('Good Eveing')('Hussain sir');

//challenge
const greetArr = greating => name => console.log(`${greating} ${name}`);

greetArr('hi')('sravan');
