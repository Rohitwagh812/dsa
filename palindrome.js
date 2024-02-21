   
// Palindrome in js 
// Example of a palindrome
// Redar === reverse Of REDAR

const  isPolondrome = (str) => {

    // convert string into array
    // reverse the array
    // convert it back to string 
    // join the array into string
    // compare the string with the original string
    // if they are equal return true else false

    return str.split('').reverse().join('') === str;
}

console.log('level' , isPolondrome('level'))
console.log('salman' , isPolondrome('salman'))

