// reverse only word 

const string = "welcome to javascript developer and react js developer"

// 1 
const reverseWord = (str) => {
    return str.split(' ').map(word => word.split('').reverse().join('')).join(' ')
}


// 2
const reverse = string.split('').reverse().join('')
const reverseWords = reverse.split(' ').reverse().join(' ')

console.log(reverseWords)