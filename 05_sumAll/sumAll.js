const sumAll = function(min, max) {
    // if (isNaN(min) || isNaN(max)) return "ERROR";
    if (!Number.isInteger(min) || !Number.isInteger(max)) return "ERROR";
    if (min < 0 || max < 0) return "ERROR";
    if (min > max) {
        const tempNumber = min;
        min = max;
        max = tempNumber
    }
    let finalSum = 0;
    for (let i = min; i < max + 1; i++) {
    finalSum += i;
    }
    
    
    return finalSum;
};

/*  if (i = Math.min(x) && i >= Math.min(y)) {
    finalSum += i;
    i++; */

// Do not edit below this line
module.exports = sumAll;
