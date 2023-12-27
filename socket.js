// target numbar 9

const arr = [1, 2, 3, 4, 5, 6, 7, 8];

const target = 9;

function findPair(arr, target) {
    for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[i] + arr[j] === target) {
        console.log(arr[i], arr[j]);
      }
    }
  }
}

findPair(arr, target);