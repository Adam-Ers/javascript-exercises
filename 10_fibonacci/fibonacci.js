const fibonacci = function(input) {
    input = parseInt(input);
    if (input < 0) { return "OOPS"; }
    if (input < 2) { return input; }
    if (input >= 2)
    {
        return fibonacci(input - 1) + fibonacci(input - 2);
    }
};

// Do not edit below this line
module.exports = fibonacci;
