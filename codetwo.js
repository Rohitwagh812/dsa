let oldArray = [1,1,1,1,1,2,2,2,3,4,5,6,6,6,6,1,4]

// first

function unique(arr) {
    let result = []
    for (let i = 0; i < arr.length; i++) {
        if (result.indexOf(arr[i]) === -1) {
            result.push(arr[i])
        }
    }
    return result
}
console.log('first' + ' ' + unique(oldArray))


//second

let newArray = Array.from(new Set(oldArray))
console.log('second' + ' ' + newArray)