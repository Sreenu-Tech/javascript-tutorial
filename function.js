/**
 * function
 */
let num1 = 10;
let num2 = 20;
let sum = num1 + num2

if (sum > 100) {
    console.log('hi')
}
else {
    console.log('bye')
}

let num3 = 20;
let num4 = 50;
let sum2 = num3 + num4
if (sum2 > 100) {
    console.log('hi')
}
else {
    console.log('bye')
}

function dosum(n1, n2) {
    let sum = n1 + n2
    if (sum > 100) {
        console.log('hi')
    }
    else {
        console.log('bye')
    }
    return sum;
}

dosum(50,60)
dosum(40,40);