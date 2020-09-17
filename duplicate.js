// Remove duplicarrayte #'s from a array

let array = [1, 2, 4, 5, 7, 1, 1, 3, 3, 9, 6, 12];
let duplicate = [];

for (let i = 0; i < array.length; i++) {
  if (duplicate.indexOf(array[i]) === -1) {
    duplicate.push(array[i]);
    
  }
}

console.log(duplicate);