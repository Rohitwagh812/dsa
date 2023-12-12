// count numbar of each new fruit

const countFruit =[
    {Apple : 4 , orange : 2 , banana : 3},
    {guava : 2 , mango : 3 , pineapple : 4},
    {grape : 1 , kiwi : 2 , Apple : 3},
]

const count = {}

countFruit.forEach(fruit => {
    for(each in fruit){
        if(count[each]){
            count[each] = count[each] + fruit[each]
        }
        else{
            count[each] = fruit[each]
        }
        
    }
})

console.log(count)