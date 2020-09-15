let numbers = [1,3,5,6,1,4,7,7,9,0];
let num = numbers.toString();

let oddNum = [];
let evenNum = [];

// console.log(num);

num.forEach(function(num){
  if (num % 2 === 0){
    oddNum.push(num)
  }
});
// console.log(evenNum);