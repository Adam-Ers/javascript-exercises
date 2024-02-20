const repeatString = function(input, num) {
    if (num < 0) { return 'ERROR';}
    let text = '';
    if (num > 0)
    {
        for (let i = 0; i < num; i++)
        {
            text += input;
        }
    }
    return text;
};

// Do not edit below this line
module.exports = repeatString;
