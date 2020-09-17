// Remove duplicarrayte #'s from a array

let array = [1, 2, 4, 5, 7, 1, 1, 3, 3, 9, 6, 12];
let duplicate = [];
array.sort();
let temp;

for (let i = 0; i < array.length; i++) {
  if (array[i] !== temp) {
    duplicate.push(array[i]);
    temp = array[i];
    
  }
}

console.log(duplicate)