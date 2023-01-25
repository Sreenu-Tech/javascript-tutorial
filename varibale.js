// Variable
// Varibale is used to define value in the application
// How to define a varibale
// C:  int age=20;
// In JS, we have 3 ways to define a varibale

// comment (single line)
/**
 * multiline comment
 */

// 1. var

var age = 20; // number
/**
 * var : define a varibale (keyword)
 * age : name of the varibale
 * = : assign the value
 * 20: value
 * ; : end of the statement
 */
var name = 'Java Script' // string

// Data Types

age = 'Abcd'; // string
age = 99.2; // number :  fractional
age = true; // boolean : true/false
age = {}; // object
age = []; // array
age = function () {

}; // function

// 2. let
let myage = 20;

/**
 * when we define a varibale using `var`, then the scope of the varibale is global
 * whe we defined a varibale using `let`, then the scope of the varibale is blocked
 */

// scope
{
    var angularVersion = 14;
    let latestAngularVersion = 15;
    {
        console.log(latestAngularVersion)
    }
}

console.log(angularVersion)

// 3. const (constant)
// const is same as let, but only difference , we can't change the value of the const, after the initialization 

const version = 14;
// version = 15;

