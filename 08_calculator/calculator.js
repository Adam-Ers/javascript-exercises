const add = function(a, b) {
    return a + b;
};

const subtract = function(a, b) {
    return a - b;
};

const sum = function(nums) {
    return nums.reduce((total, num) => total + num, 0);
};

const multiply = function(nums) {
    return parseInt(nums.reduce((total, num) => total * num, 1));
};

const power = function(a, pow) {
    let originalA = a;
    for (i = 1; i < pow; i++)
    {
        a *= originalA;
    }

    return a;
};

const factorial = function(a) {
    let num = 1;
    for (i = 1; i < a; i++)
    {
        num *= i + 1;
    }
    return num;
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
