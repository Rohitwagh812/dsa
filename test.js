// var x =21 ;

// var test = function () {
//     console.log(x)

//     // var x =20
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


// /////


// let cab = true

// if(!cab){
//     console.log("Cab is not available")
// }else{
//     console.log("Cab is available")
// }

// ///

// let myArr1 = ['cat' , 'apple' , 'elephant' , 'ball' , 'dog']
// //one 
// console.log(myArr1.sort())

// //  two
// console.log(
//     myArr1.sort((a, b)=>{
//     // return a.localeCompare(b);
//     // return b.localeCompare(a);

//     return b - a
// })
// )


// ///

// let a = {} , 
//     b= {key : 'b'} ,
//     c = {key : 'c'};

// a[b] = 123;
// a[c] = 456;

// console.log(a[b])

//


let person = {
    name: "rohit wagh",
    occupation: null , 
    isFemale: false,
    isMale: true,
    lastName: ''
}
 if(!person.occupation){
    console.log('java' , person.occupation)
 }
 if(!person.isFemale){
    console.log('python' , person.isFemale)
 }
 if(!person.isMale){
    console.log('javascript' , person.isMale)
 }
 if(!person.lastName){
    console.log('react' , person.lastName)
 }
 if(!person.abc){
    console.log('angular' , person.abc)
 }