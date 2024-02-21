const sumAll = function(num1, num2) {
    if (!Number.isInteger(num1 + num2) || num1 < 0 || num2 < 0) { return 'ERROR'; }
    let sum = 0;
    let smallerNumber = num1 < num2 ? num1 : num2;
    let largerNumber = num1 > num2 ? num1 : num2;
    for (let i = smallerNumber; i <= largerNumber; i++) { sum += i; }
    return sum;
};

// Do not edit below this line
module.exports = sumAll;
