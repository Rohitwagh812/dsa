// merge arrays without dulicates numbar 


let oneNum = [1,2,3,4,5,6,3];
let twoNum = [6,7,8,6,9,4,10,1,2];

let mergeNum = Array.from(new Set([...oneNum , ...twoNum]))
console.log(mergeNum);



function mergeAndRemoveDuplicates(arr1, arr2) {
    // Merge the arrays and convert to a Set to remove duplicates
    const mergedArray = Array.from(new Set([...arr1, ...arr2]));
    return mergedArray;
}

// Test the function
let oneNumm = [1, 2, 3, 4, 5, 6, 3];
let twoNumm = [6, 7, 8, 6, 9, 4, 10, 1, 2];

console.log(mergeAndRemoveDuplicates(oneNumm, twoNumm));