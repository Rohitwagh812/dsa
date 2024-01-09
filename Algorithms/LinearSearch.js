// Linear Search

function linearSearch(array , target) {
    
    for(let i = 0; i < array.length; i++) {
        if(array[i] === target) {
            return i;
        }
    }
    return -1;
}

let array = [1,2,3,4,5];
let target = 5;

console.log( "The index of the target is " ,target , ":", linearSearch(array , target));



// two 


function linearSearch(arr, target) {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === target) {
            return i; // Return the index if found
        }
    }
    return -1; // Return -1 if not found
}

// Usage
let arra = [3, 1, 4, 1, 5, 2, 6, 5, 3, 5, 9];
let targetValue = 9;
let result = linearSearch(arra, targetValue);

if (result !== -1) {
    console.log(`Element ${targetValue} found at index ${result}.`);
} else {
    console.log(`Element ${targetValue} not found in the array.`);
}