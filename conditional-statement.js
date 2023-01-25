/**
 * Conditional Statement
 * 1. if else
 * 2. switch case
 */

// if else
/**
 * traffic signal
 * 1. RED : STOP
 * 2. ORANGE : READY
 * 3. GREEN : GO
 * 4. NA : YOU HAVE TO DECIDE
 */
let signal = 'GREEN';
// if(true)
if (signal == 'RED') {
    // true work
    // console.log('STOP')
}
else {
    // false part
    //console.log('GO')
}

// mutiple if condition
if (signal == 'RED') {
    console.log('STOP')
}
else if (signal == 'ORANGE') {
    console.log('READY')
}
else if (signal == 'GREEN') {
    console.log('GO')
}
else {
    console.log('LOOK AND GO')
}
/**
 * if(boolean)
 * 1.if is a predeined function
 * 2. which takes the arugment as boolean(true/false)
 * 3. {} : scope of the if
 * 
 */

// switch case
// switch case, is only work if you have list of options
// switch (agrument as string or number)
// case is called options
signal = 'NA';
switch (signal) {
    case 'RED': {

    } break;
    case 'ORANGE': {

    } break;
    case 'GREEN': {
        //
    } break;
    default: {
        // this is same as else part of if
    } break;
}

let day = 'SAT';
switch (day) {
    case 'SAT': case 'SUN': {
        console.log('weekend')
    } break;
    default: {
        console.log('weekdays')
    } break;
}