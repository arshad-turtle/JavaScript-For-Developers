// Declaration and Defined

var value

//whats the value between this 2 line of variable value?  in JS as you declare a variable there is explicit value assgined / initilalized with UNDEFINED
//What is UNDEFINED?  ---> IT is a JS datatype for example in boolean there is 2 value true or false so in undefined there is only 1 type
// No type information
console.log(value)
value = 42;


//what is NULL
//null is a primitive value that represents the intentional absence of any object value.

var a = false

console.log(a)

a = null
console.log(a)
console.log(typeof 3.14)


function sunday(day)
{
    if(!day)
    {
        return null
    }
    return { message : `Todaya is , ${day}`}



}
sunday()
sunday("Monday")


// How too check for NULL values

const missing = null
 a= 2
console.log(missing===null)
console.log(typeof null)

// NOte that we can not use typeof operator to determine a type of a null value because  Turns out typoef null being 'object' was a mistake in the early JavaScript implementation

// coercion in javascript

//operation on variable with another variable if both variable are of same type
//like addition of 2 numbers but whart if
const sum = 35 + "Hello";
console.log(sum)
//coercion is caused when diffrent operators used between diffrent datatype/
const string = ""
const number = 40
const boolean = true

console.log(!string)
// true - string is coerced to boolean `false`, then the NOT operator negates it

console.log(boolean + string)
// "true" - boolean is coerced to string "true", and concatenated with the empty string

console.log(40 + true)
// 41 - boolean is coerced to number 1, and summed with 40