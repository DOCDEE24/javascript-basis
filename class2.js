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

fruitArray.map((fruit , index) =>{
    console.log(index, ":", fruit)
})


// TRUTHY AND FALSY VALUES


if(true){
    console.log('i am not happy')
}

//Truthy Value: true, non-empty string, numbers, arrays
//Falsy value : false, empty string, 0, undefined, null

if({}){
    console.log('i am happy')
}

console.log(typeof '5'+'5')
console.log(typeof '5'-4)


























//----functions----//


let number1 = 8;

let number2 = 10;

console.log(number1 + number2)

function sumOfTwoNumbers(){
    console.log('sum of two numbers from a function', number1 + number2)
}