//! Simple types
let apples: number = 5;
let speed: string = 'fast';
let hasName: boolean = true;
let nothingMuch: null = null;
let nothing: undefined = undefined;

//! Built in objects
let now: Date = new Date();

//! Array
const colors: string[] = ['blue', 'red', 'green', 'yellow'];
let myNumbers: number[] = [1, 2, 3, 4, 5];
let truths: boolean[] = [true, false];

//! Classes
class Car {}

let cat: Car = new Car();

//! Object literal
let point: { x: number; y: number } = {
  x: 10,
  y: 20,
};

//! Function
const logNumber = (i: number): void => {
  console.log(i);
};

logNumber(5);

//?
//? When to use annotations
//?

//* 1) Function that returns 'any' type
const json = '{"x": 10, "y": 20}';
const coords: { x: number; y: number } = JSON.parse(json);
console.log(coords);

//* 2) When we declare a variable on one line and then initialize it later
let words = ['red', 'green', 'blue'];
let foundWord: boolean;

for (let i = 0; i < words.length; i++) {
  if (words[i] === 'green') {
    foundWord = true;
  }
}

//* 3) Variable whos type cannot be inferred correctly
let numbers = [-10, -2, -12];
let numberAboveZero: boolean | number = false;

for (let i = 0; i < numbers.length; i++) {
  if (numbers[i] > 0) numberAboveZero = numbers[i];
}
