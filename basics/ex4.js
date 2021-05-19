// Write a function that takes a number as argument
// If the number is a whole number (has no decimal place), return true
// Otherwise, return false

function isWhole(num) {
    return res = num - Math.floor(num) !== 0 ? false : true
};

console.log(isWhole(10.57));