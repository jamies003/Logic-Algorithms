let str = 'The Vision of the Future.';

let charUpper = str.toUpperCase();
// console.log(charUpper);

let iterator = str[Symbol.iterator]();
let theChar = iterator.next();

while (!theChar.done && theChar.value !== ' ') {
  console.log(theChar.value);
  theChar = iterator.next();
}
console.log(theChar);