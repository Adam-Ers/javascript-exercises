const palindromes = function (s) {
    /** @type {String} **/
    let stringy = s;

    stringy = stringy.toLowerCase();
    stringy = stringy.replace(/[,]|[.]|[ ]|[!]|[?]/gm, '');
    let reverseStringy = '';
    for (i = stringy.length - 1; i >= 0; i--)
    {
        reverseStringy += stringy.charAt(i);
    }
    console.log(reverseStringy);

    return stringy === reverseStringy;
};

// Do not edit below this line
module.exports = palindromes;
