  
// 🌟🌟🌟 M V P 🌟🌟🌟//

// 🏡 Task 1: Variables
/* [x]Create variables for principal, interest rate, and years. Assign them the values 200000, 0.05, and 30 respectively. [x]Create another value called name and give it the value of your own name.
*/

let P = 200000; //principal
let interestRate = 0.05; //interest rate  x/100 = 0.00 = number percentage in decimal form 5% = 0.05
let years = 30; //how many years
let name = 'Charise'

// 🏡 Task 1.5: Simple Math
/* To create a monthly mortgage rate calculator, we need to know the number of years in months and the monthly interest rate. 
[x] Create a variable called `monthlyInterestRate` and give it the value of interest rate divided by 12. 
[x]Create another variable called `periods` and give it the value of years*12.
*/

const monthlyInterestRate = interestRate/12; //monthly interest rate
const periods = years*12; //converts years into months
const I = monthlyInterestRate; //monthly interest rate is interest rate / 12 
const N = periods;
console.log(P, interestRate, I, N, years, name, monthlyInterestRate, periods);

// 🏡 Task 2: Harder Math
/* [x]Create your calculator! Use the formula in the ReadMe to run calculations on your numbers. Save the final value into a variable called monthlyRate.
Hint: while these calculations can be done in one line, it might be helpful to create a variable called "numerator" to calculate the numerator, and another called "denominator" to calculate the denominator 
Hint #2: you'll need to use the `math` object for parts of this calculation!
[x]When your math is correct, monthlyRate will equal 1073.64
*/

// const a = Math.pow(1+I,N); // math part of equation with exponent
// const numerator = I * a; //top of equation simplified
// const denominator = a - 1; //bottom of equation simplified
// let e = P * (numerator/denominator); // final equation simplified
let e = P * ((I/12) * Math.pow((1 + (I/12) ),(N*12))) / (Math.pow((1 + (I/12)),(N*12)) - 1);

console.log(e);
let monthlyRate = null;

monthlyRate = e.toFixed(2);

console.log(monthlyRate);

// 🏡 Task 3: Function
/* Create a function called `mortgageCalculator` that combines all of the steps from task 1 and 2 and returns a sentence "{Name}, your monthly rate is ${monthlyRate}"
If your name is `Oscar` mortgageCalculator() should return "Oscar, your monthly rate is 1073.64"
*/

//NEED HELP HERE  --- NOt showing returned
function mortgageCalculator() {
    let e = P * ((I/12) * Math.pow((1 + (I/12) ),(N*12))) / (Math.pow((1 + (I/12)),(N*12)) - 1);
    let monthlyRate = e;
    return `"${name}, your monthly rate is ${monthlyRate.toFixed(2)}"`;
};
console.log(mortgageCalculator());//Shows NaN
//STOPPED WORKING TASK 3

// // [x]🏡 Task 4: Arguments and Parameters
// /* Substitute the variables in your functions for parameters such that you can substitute `P`, `I`, and `N` when you call the function.
// For example,
// mortgageCalculator(2000000, 0.05, 30); <-- should return 1,073.64
// */

//DONE 

function mortgageCalculator(P, I, N){
    let monthlyPayments = P * ((I/12) * Math.pow((1 + (I/12) ),(N*12))) / (Math.pow((1 + (I/12)),(N*12)) - 1);
    return monthlyPayments.toFixed(2);
}
console.log(mortgageCalculator(200000, 0.05, 30));   

//TASK 4 DONE

// // 🏡 Task 5: Conditionals
// /* Add another paramter to your function called credit score. This parameter will be a number between 0 and 800 (a credit score).
// Then, add control flow within your function such that IF creditScore is above 740, interest rate drops by 0.5%, if credit score is below 660, interest rate increases by 0.5% and if credit score is anywhere between 660 and 740 interest rate doesn't change.
// */

//DONE
function mortgageCalculator2(P, I, N,creditScore){
    if (creditScore < 660){
       I = I + 0.005;
        //console.log('below 660'); //quick check to see if this worked
    }else if (creditScore > 740) {
       I = I - 0.005;
    //console.log('above 740'); //quick check to see if it worked
            }
    let monthlyPayments = P * ((I/12) * Math.pow((1 + (I/12) ),(N*12))) / (Math.pow((1 + (I/12)),(N*12)) - 1);
    return monthlyPayments.toFixed(2);
}

console.log(mortgageCalculator2(200000, 0.05, 30, 650)); //low
console.log(mortgageCalculator2(200000, 0.05, 30, 700)); //regular
console.log(mortgageCalculator2(200000, 0.05, 30, 800)); //high
// TASK 5 DONE


// // 🏡 Task 6: Loops
// /* Write a new function called variableInterestRate. This function should be the same as mortgageCalculator, except it should console.log the monthly payment for 10 different interest rates at 0.5% increments plus or minus 2% from the inputted interest rate. Complete these calculations using a for loop.
// For example, variableInterestRate(200000, 0.04, 30) should console.log:
// "{Name}, with an interest rate of 0.02, your monthly rate is $739"
// "{Name}, with an interest rate of 0.025, your monthly rate is $790"
// "{Name}, with an interest rate of 0.03, your monthly rate is $843"
// "{Name}, with an interest rate of 0.035, your monthly rate is $898"
// "{Name}, with an interest rate of 0.04, your monthly rate is $955"
// "{Name}, with an interest rate of 0.045, your monthly rate is $1013"
// "{Name}, with an interest rate of 0.05, your monthly rate is $1074"
// "{Name}, with an interest rate of 0.055, your monthly rate is $1136"
// "{Name}, with an interest rate of 0.06, your monthly rate is $1199"
// */

//Need help with For loop
let count = 10;
    for (let x = 0; x < count; x++){
function variableInterestRate(P,I,N){
    let monthlyPayments = P * ((I/12) * Math.pow((1 + (I/12) ),(N*12))) / (Math.pow((1 + (I/12)),(N*12)) - 1);
    return (`${name}, with an interest rate of ${I}, your monthly rate is ${monthlyPayments.toFixed(2)}`);
}
I + 0.005;
x++;
}
console.log(variableInterestRate(200000, 0.04, 30));
    

// // } 
// //fix for loop
// function variableInterestRate (principal, i, number, creditScore){
//     let y = i/12;
//     let z = number*12;
//     if (creditScore < 660){
//         y = (i + 0.005)/12;
//     //console.log('below 660') quick check to see if this worked
//     }else if (creditScore > 740) {
//         y = (i - 0.005)/12;
//         //console.log('above 740') quick check to see if it worked
//     }
//     let x = principal * (y * Math.pow((1 +y ),z)) / (Math.pow((1 + y),z) - 1);
//     let m = x.toFixed(2);

//     for (let up = i; up <10; up++){
//         i = i +=0.005;
//     }
//     return `"${name}, your monthly rate is ${monthlyRate}"`;

// }

// console.log(variableInterestRate(200000,0.05,30, 640));


// // 🌟🌟🌟 STRETCH 🌟🌟🌟//

// /* Attempt any of the stretch goals below once you have finished the work above. Remember as always, these may require additional research beyond what you learned today */

// /*  🏡 Add  `Property Tax`, `Homeowner's insurance` and `HOA fees` as parameters in your function to calculate total monthly spending on housing */


// /* 🏡 Build a calculator function that accepts `monthly payment` and `interest rate` and returns the maximum loan that a person could afford */


// /* 🏡 Explore using `window.prompt()` to allow a user to input parameters in the browser */


// /* 🏡  Refactor your `variableInterestRate()` function to accept an array of interest rates (make sure to copy and paste as to not lose your work!) */

