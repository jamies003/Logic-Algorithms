let number = [14287623];
let num = number.toString()

let odd = [];
let even = [];

for (let i = 0; i < num.length; i++) {
  if (num[i] % 2 === 0){
    even.push(num[i]);

  }else{
    odd.push(num[i]);
  }
  // console.log(num[i]);
}
console.log(odd);


