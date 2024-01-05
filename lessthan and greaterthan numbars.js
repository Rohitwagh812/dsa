
let num = [-1,-2,0,1,2,4,5,6,7,3,9,8]

/**
 * greater than numbars 
 */

const lessthan = num.filter(num => num < 0)

/**
 * less than numbars
 */

const greaterthan = num.filter(num => num > 0)


console.log('this greaterthan numbars', greaterthan , '  ', 'and' , 'this a lessthan numbars' ,lessthan)