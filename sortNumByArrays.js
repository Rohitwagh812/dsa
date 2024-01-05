let person1 ={
  name : 'Rohit Wagh',
  address:{
    line1:
    'Daskebardi',
    line2:
    'Chalisgaon'

  }
}

let person2 ={...person1};
person2.address.line2='Mumbai';
person2.name='Rahul Arun Wagh';
console.log(person1);
console.log(person2);