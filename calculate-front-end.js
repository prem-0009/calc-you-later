/*********************************************
 * YOUR CODE HERE!                           *
 ********************************************/
const calculate1 = require('./calculate-back-end');

const num1 = Number(getInput(0));
const num2 = Number(getInput(2));
const operator = getInput(1); 



//function
const calculateIt = calculate1(num1, num2, operator);




//stretch







/******************************************
 * OUR CODE BELOW--DON'T TOUCH!           *
 *****************************************/

function getInput(i) {
  return process.argv[i + 2];
}
