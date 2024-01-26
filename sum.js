

// sum (1,2) (3,4) => 10
// sum (1,2) (3,4) (5,6) (7,8) () =>  36

function sum (a,b){
    return function (c,d){
        if(c!==undefined && d!==undefined){
            return sum(a+b+c+d, 0);
        }else{
            return a
        }
    }
}

let result = sum(1,2) (3,4) () // sum(1,2) (3,4) (5,6) (7,8) ()

console.log(result)