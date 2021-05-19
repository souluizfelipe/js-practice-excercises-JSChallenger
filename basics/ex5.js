// Write a function that takes two strings, say a and b, as arguments
// If a contains b, append b to the beginning of a
// If not, append it to the end
// Return the concatenation

function verify(a, b) {
       if (a.indexOf(b)) {
        return (b + a);
    } else {
        return (a + b);
    }
}

const verifyAlt = (a, b) => {
    return a.includes(b) ? (b + a) : (a + b);
}

console.log(verify("think, therefore I am","I "));
console.log(verifyAlt("think, therefore I am","I "));