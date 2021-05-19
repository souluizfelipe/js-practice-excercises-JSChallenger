// Write a function that takes two numbers, say x and y, as arguments
// Check if x is divisible by y
// If yes, return x
// If not, return the next higher natural number that is divisible by y

// verificar qual número inteiro é divisível por y  

function div(x, y) {
    if (x % y !== 0) {
        while (x % y !== 0) {
            x++
        };
        return x;
    } else {
        return x;
    };
}


console.log(div(7, 3));


const div2 = (x, y) => {
    if (x % y !== 0) {
        while (x % y !== 0) {
            x++
        };
        return x;
    } else {
        return x;
    };
}

console.log(div2(1784, 76));
