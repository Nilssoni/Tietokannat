const prompt = require('prompt-sync')();
function getSum(){
    // asks numbers from the user
    let num1 = parseFloat(prompt("Enter the first number: "));
    let num2 = parseFloat(prompt("Enter the second number: "));
    // returns the numbers
    return num1 + num2;
}
// returns function getSum() answer
console.log('Summa on ', getSum());