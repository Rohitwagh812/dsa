/**
 * create a one function to check if Sting is Anagram or not  
 */

const firstLetter = "Silent";
const secondLetter = "Listen";


function isAnagram(first , second){
    let a = first.toLowerCase(); //silent
    let b = second.toLowerCase(); //listen

    a = a.split("").sort().join(''); //eilnst
    b = b.split("").sort().join(''); //eilnst

    return a === b;
}

console.log(isAnagram(firstLetter , secondLetter)) // true