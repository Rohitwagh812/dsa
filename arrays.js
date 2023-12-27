let one = ['Mango' , 'Apricot' , 'Blueberry' , 'Mango'];

let two = ['Apricot' , 'Kiwi' , 'Blueberry' , 'Kiwi'];

let arr = Array.from(new Set([...one , ...two]));

console.log(arr);


arr = [...new Set(one.concat(two))];

console.log(arr);

