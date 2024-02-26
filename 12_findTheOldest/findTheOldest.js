const findTheOldest = function(input) {
    return input.sort((a, b) => {
        if (a.yearOfDeath === undefined) { a.yearOfDeath = 2023; }
        if (b.yearOfDeath === undefined) { b.yearOfDeath = 2023; }
        let aOldest = a.yearOfDeath - a.yearOfBirth;
        let bOldest = b.yearOfDeath - b.yearOfBirth;
        return aOldest > bOldest ? -1 : 1;
    })[0];
};

// Do not edit below this line
module.exports = findTheOldest;
