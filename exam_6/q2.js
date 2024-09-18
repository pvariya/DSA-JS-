// 2. The Chronicles of Fibonacci:
// In the ancient lands of Sequences, the Fibonacci tribe recorded a mystical pattern of numbers. Each
// number in this pattern was the sum of the two that came before it. To continue the chronicles, your
// task is to help 'fibonacci(n)' find the nth number in this sequence. The journey starts with the first two
// numbers as 0 and 1, and grows infinitely thereafter.
// - Example Chronicle:
// Input: 6
// Output: 8

const num = 6
const fibonacci = (n) => {
    if (n < 2) {
        return n
    }
    return fibonacci(n - 2) + fibonacci(n - 1);
}

console.log(fibonacci(num));
