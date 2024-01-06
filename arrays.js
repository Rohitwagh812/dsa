let one = ['Mango' , 'Apricot' , 'Blueberry' , 'Mango'];

let two = ['Apricot' , 'Kiwi' , 'Blueberry' , 'Kiwi'];

let arr = Array.from(new Set([...one , ...two]));

console.log(arr);


arr = [...new Set(one.concat(two))];

console.log(arr);

// two 

let array = [1,2,3,4,5]
let array2 = [6,1,2,3,4,5]

// true and false 
console.log(array.includes(2));// true
console.log(array.includes(6));// false
//indexOf 
console.log(array.indexOf(2));// 1

console.log(array2.sort())
