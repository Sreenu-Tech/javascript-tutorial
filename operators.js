// Operators
// Arthimetic Operators
// +,-,*,/,%
let num1 = 10;
let num2 = 20;
// sum of two no
let sum = num1 + num2;
console.log(sum) // 30
// let sum=30;(10+20)

// Assignment Operator
let num3 = 30;
// increase num3 value by 1
num3 = num3 + 1; // num3+=1
// num3=31;(30+1;)
console.log(num3) // 31
num3+=1; // num3=num3+1 // 32
num3+=2; // num3=num3+2 // 34
// +=, -=,*=,/=,%=
num3+=1;
num3++;


// Comparison Operator
// the output of Comparison Operator is boolean (true/false)
num1=10;
num2=20;
// above two varibales are equal or not?
// num1==num2 // equal, not equal
console.log(num1==num2)
let num4='10'; //string
console.log(num1==num4)// true
console.log(num1===num4)// true
/**
 * ==,=== both are use to compare the value
 * where as == compare the value and
 * === compare value with type
 */
// typeof keyword will return the type of the data/value
console.log(typeof num1)
console.log(typeof num4)

/**
 * == (equal to)
 * === (equal to with type check)
 * != (not equal to)
 * !== (no equal to with type check)
 * > (greater than)
 * < (less than)
 * >= (greater than equal to)
 * <= (less than euqal to)
 * ? (ternary)
 */

// Logical C
// This Operator return type is boolean (true/false)
/**
 * && (AND)
 * || (OR)
 */

/**
 * Eligible for vote or not
 * Age is >= 18
 * then the person is eligible for vote
 */
let age=18;
console.log(age>=18)// eligible for vote

/**
 * Mrg. eligible
 * 1. Age >=21
 * 2. Gender=='Male'
 */
age=20;
// gender
let gender='Male';

console.log(age>=21 && gender==='Male') // eligible

console.log(age>=21 || gender==='Male') // eligible

// age>=21 and gender==='Male' // 

// (true/false) && (true/false)
// boolean && boolean

/**
 * && (AND) : Logic gate
 * T && T :T
 * T && F :F
 * F && T :F
 * F && F :F
 * 
 * || (OR) :  Logic gate
 * T || T : T
 * T || F : T
 * F || T : T
 * F || F : F
 */