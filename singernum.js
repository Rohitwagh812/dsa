// merge arrays without dulicates numbar 


let oneNum = [1,2,3,4,5,6,3];
let twoNum = [6,7,8,6,9,4,10,1,2];

let mergeNum = Array.from(new Set([...oneNum , ...twoNum]))
console.log(mergeNum);

