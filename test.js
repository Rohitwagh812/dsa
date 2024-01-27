// var x =21 ;

// var test = function () {
//     console.log(x)

//     var x =20
// }

// test()
// //////////

// async function makeTeaAsync () {
//     console.log('Boiling Water');

//     // Simulate a task that takes time (e.g., boiling water)

//     await new Promise(resolve => setTimeout(resolve, 2000));
//     console.log('Water is ready');
//     console.log('Tea is ready');

// }

// makeTeaAsync()


/////


let cab = true

if(!cab){
    console.log("Cab is not available")
}else{
    console.log("Cab is available")
}

let myArr1 = ['cat' , 'apple' , 'elephant' , 'ball' , 'dog']

console.log(myArr1.sort())


console.log(
    myArr1.sort((a, b)=>{
    return a.localeCompare(b)
})
)