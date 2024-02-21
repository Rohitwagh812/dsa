/**
 *  Code Blocks 
 */

// Example 1: if statement with code block
let x = 10;
if (x > 5) {
    console.log("x is greater than 5");
    console.log("This statement is inside the code block.");
}

// Example 2: for loop with code block
for (let i = 0; i < 3; i++) {
    console.log("Inside the loop: " + i);
}

// Example 3: function with code block
function greet(name) {
    console.log("Hello, " + name + "!");
    console.log("Welcome to JavaScript!");
}

// Calling the function
greet("John");

// Example 4: Nested code blocks
{
    console.log("Outer code block");
    {
        console.log("Inner code block");
    }
}


const PI = 3.14;
// PI = 3.14;      // This will give an error
// PI = PI + 10; 

console.log(PI);


// array in js 


let arrr = []


const citys = {
    cities: ['jalgaon', 'nashik', 'mumbai', 'jalna', 'beed', 'chalisgaon', 'kaylan']
};

console.log(citys.cities); // Output: ['jalgaon', 'nashik', 'mumbai', 'jalna', 'beed', 'chalisgaon', 'kaylan']



let gaon = 'jajja'


if(citys.cities.includes(gaon)){
    console.log('yes')
}else{
    console.log('no')
}


