// Bubble sort 
// one
function bubbleSort(arr) {
    const n = arr.length;

    for (let i = 0; i < n - 1; i++) {
        for (let j = 0; j < n - i - 1; j++) {
            if (arr[j] > arr[j + 1]) {
                [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]]; // Swap elements
            }
        }
    }
}
// Usage
let arrayToSort = [64, 34, 25, 12, 22, 11, 90];
bubbleSort(arrayToSort);
console.log("Sorted array:", arrayToSort);
//two
for(let i=0;i<arrayToSort.length -1  && arrayToSort[i] > arrayToSort[i+1]  ;i++){
    let temp = arrayToSort[i]
    arrayToSort[i] = arrayToSort[i+1]
    arrayToSort[i+1] = temp

    
    
}
console.log("Sorted array:", arrayToSort);
//three 
arrayToSort.sort()
console.log("Sorted array:", arrayToSort);