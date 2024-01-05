/**
 * @param {number[]} nums
 * @return {number[]}
 */
function sortArrayByParity(nums) {
    // Initialize two pointers: one for even indices and one for odd indices
    let evenPointer = 0;
    
    // Iterate through the array using a for loop
    for (let i = 0; i < nums.length; i++) {
        // If the current element is even, swap it with the element at evenPointer
        if (nums[i] % 2 === 0) {
            // Swap elements
            [nums[i], nums[evenPointer]] = [nums[evenPointer], nums[i]];
            
            // Move the evenPointer to the next even index
            evenPointer++;
        }
    }
    
    return nums;
}

// Test with the given example
const nums = [5,2,4,6,7,9,8,10];
const result = sortArrayByParity(nums);
console.log(result);