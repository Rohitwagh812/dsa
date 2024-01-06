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