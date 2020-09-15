// An odd number of odd numbers
// Console log only the numbers that have an odd number of odd numbers. 
//For instance: 2749621 (has an odd number of odd numbers {7, 9 and 1}).  This number should be console logged.
// 3879625 (has an even number of odd numbers {3, 7, 9 and 5}.  This number should NOT be console logged.

let numbers = [337941312819039,5602256151929824,30225170444787,3551910535291105,4041593896103,5347039149245184,337941624752787,67099423720619241,6394362198407475,3560667783239439,4017950948196059,6759393197130163,6771549142615186,201836980226124,3556519446278575,3566850663741161,3528172140783618,3537563353849766,6331107836502898,4508928697689785];

let num = numbers.toString()
let numEven = [];
let numOdd = [];

for (let i = 0; i < num.length; i++){

    if (num[i] % 2 === 0){
      // numbers[i] = 'even';
      numEven.push(num[i]);
      // console.log(numEven);

    }else{
      // numbers[i] = 'odd'
      numOdd.push(num[i])
      // console.log(numOdd);
    }
  }

console.log(numOdd);