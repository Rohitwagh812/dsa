let even = [];
let odd = [];

for (let i = 0; i < 10; i++) {
    if (i % 2 === 0) {
        even.push(i);
    } else {
        odd.push(i);
    }
}

console.log('even =>', even);
console.log(' odd =>', odd);
