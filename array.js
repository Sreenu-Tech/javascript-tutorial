// Array :it will store multiple value into a varibale
// list of student name
// [] is used to define an array in JS
// multiple value, separated by comma(,)
// in JS array is dynamic data structure
let names = ['S1', 'S2', 'S3', 'S100']; // 4 items
// ['S1' :0, 'S2':1, 'S3':2, 'S100':3]
// to access the indivisual item from an array we required the concept called 'index'
console.log(names.length) // length is used to get the length of an array
// access the array item
console.log(names[0]);
console.log(names[1]);

// change the array item value
names[0] = 'SAM';
console.log(names[0])

// how to add and remove item from an array
// ADD : 
// insert item end of an array
names.push('S101')// this is used to push the item end of an array
console.log(names);
// insert item start if array
names.unshift('S0');
console.log(names);
//
