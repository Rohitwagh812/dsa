// array nm sum 

let num = [1, 2, 3, 4, 5];

// first for loop method

let sumnumb = 0;

for(let i = 0; i < num.length; i++){
    sumnumb += num[i];
}   
console.log(sumnumb);

// second reduce method

let sumnum = num.reduce((a, b) => a + b);
console.log("Sum of numbers:", sumnum);

// 3th reduce method 

function sum(...num) {
    return num.reduce((a, b) => a + b);
}

console.log(sum(1, 2, 3, 4, 5));