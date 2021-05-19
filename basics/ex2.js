// Write a function that takes two numbers, say a and b, as arguments
// If a is smaller than b, divide a by b
// Otherwise, multiply both numbers
// Return the resulting value

function myFunction(numA, numB) {
    const res = numA < numB ? numA / numB : numA * numB;
    return res 
}


console.log(myFunction(90, 45));