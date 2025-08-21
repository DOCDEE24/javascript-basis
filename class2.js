let firstName = "daniel"
let surname = "oke"
let fullName = firstName + " " + surname
console.log(fullName)

let fruitArray = ['apple','orange','banana','pear','coconut']

//console.log('item in this array', fruitarray )
//fruitArray.pop()
//fruitArray.shift()
//fruitArray.push("strawberry")
//fruitArray.unshift("papaya")

console.log('items in this array', fruitArray)


console.log( 'number of fruit in my array',fruitArray.length)

console.log('last item', fruitArray.length)

console.log(fruitArray. tostring)

fruitArray.map(callbackfn:(fruit, index): void=>{
    console.log(index , ":", fruit)
})