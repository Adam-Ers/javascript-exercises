const removeFromArray = function(inputArray, ...removals) {
    let newArray = [];
    for (element of inputArray)
    {
        if(!removals.find(x => x === element))
        {
            newArray.push(element);
        }
    }
    return newArray;
};

// Do not edit below this line
module.exports = removeFromArray;
