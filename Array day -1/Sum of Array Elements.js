// Question 1: Sum of Array Elements

// Write a function to calculate the sum of all elements in an array.

// Input: [1, 2, 3, 4, 5]

// Output: 15

let arr = [1, 2, 3, 4, 5];
let sum = 0;
for (let i = 0; i < arr.length; i++) {
  sum += arr[i];
}
console.log(sum);
