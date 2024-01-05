let one = [ 'one' , 'two' , 'three' , 'four' ];
let two = [ 'rohit' , 'rahul' , 'raj' , 'rahul' ]


let three = one.concat(two);

console.log(three);

three = Array.from(one, (value , index) => {
    return {
        value : value ,
        index : index
    }
}
)
console.log(one , ' ans ' , three);