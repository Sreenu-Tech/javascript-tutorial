// LOOP : traverse/navigate/go from one point to another point

/**
 * print the numbe from 1- 100
 * start point :1
 * end point :100
 * speed :1 
 */

/**
 * Each loop contains 3 concept
 * 1. Start Point
 * 2. End Point
 * 3. Speed
 * 
 * We have 3 kind of loops are availabel
 * 1. for
 * 2. while
 * 3. do while
 */

/**
 * for : loop
 * If you know the start and end value, then only for loop is used
 * Print the number between 1 to 100
 * 1. start point : 1
 * 2. end point : 100
 * 3. speed :1
 */
for (let i = 1; i <= 100; i++) {
    // console.log(i);
}

/**
 * for(initialization;condition;increment/decrement){}
 * 
 * Print the number between 100 to 1
 * 1. start point : 100
 * 2. end point : 1
 * 3. speed : -1
 */
for (let i = 100; i >= 1; i--) {
    // console.log(i)
}

/**
 * print the odd and even number between 1 to 100
 * 1. start point : 1
 * 2. end point : 100
 * 3. speed :1
 * 4. check the value is odd or event
 */

for (let i = 1; i <= 100; i++) {
    // if the value divided by 2, its event other wise odd
    if (i % 2 == 0) {
        console.log('even')
    }
    else {
        console.log('odd')
    }
}
/**
 * 1.  let i=1; initialization part will execute only once
 * 2. i=1, check the condition i<=100(1<=100)
 * 3. inside the loop execute the code
 * 4. i++ : 1+=1=2 
 * 5. check line no 2 
 */

/**
 * while
 * start point : initialization
 * end point : condition
 * speed : increment/decrement
 */
let num = 1; // initialization
while (num <= 100) { // condition
    console.log(num);
    num++; // increment
}

/**
 * do while
 * start point : initialization
 * end point : condition
 * speed : increment/decrement
 */
let num2 = 1; // initialization
do {
    console.log(num2) // body
    num2++; //increment
} while (num2 <= 100) // condition