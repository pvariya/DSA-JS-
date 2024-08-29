// 1: Find All Prime Numbers
// Write a function that takes an integer `n` and returns a list of all prime numbers less than or equal to `n`.
// Example:
// Input: n = 10
// Output: [2, 3, 5, 7]
let input = 100

// for (let i = 1; i <= input; i++) {

//     for (let j = 1; j <= input; j++) {
//         if (i % j === 0) {

//         }
//     }
// }

const getPrime = (n) => {
    if (n <= 3) return true;

    for (let i = 2; i <= 9; i++) {
        if (n % i === 0 && n != i) return false;
    }
    return true;
}

for (let i = 1; i <= input; i++) {
    if (getPrime(i)) {
        console.log(i);

    }
}