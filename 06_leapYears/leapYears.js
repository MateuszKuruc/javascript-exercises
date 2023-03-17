const leapYears = function(year) {
    let yearCheck = true;
    if (!Number.isInteger(year)) return "ERROR";
    if (year % 4 == 0 && (year % 100 !== 0 || year % 400 == 0)) {
    return yearCheck = true;
}   else {
    return yearCheck = false;
}
   /* }   else if (year % 4 == 0 && year % 100 == 0) {
        return yearCheck = false;
    } else if (year % 4 !== 0) {
    return yearCheck = false; 
}
    return yearCheck; */
    
}

// Do not edit below this line
module.exports = leapYears;
