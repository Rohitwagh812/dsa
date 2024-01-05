//most asked javacsript interview questions 

let arr = [ 1,2,3,4,5 ]
for(let i = 0; i < arr.length; i++){ // not var use let Example (var not use let ( var let i = 0; i < arr.length; i++  ))
      setTimeout(() =>{
            console.log(arr[i])
      
      }, 1000)
}