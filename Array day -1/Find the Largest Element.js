// Question 2: Find the Largest Element

// Array Practice Questions

// Write a function to find the largest element in an array.

// Input: [3, 7, 1, 9, 2]

// Output: 9

let arr = [3, 7, 1, 9, 2];

let largest = 0;

for (let i = 0; i < arr.length; i++) {
  if (largest < arr[i]) {
    largest = arr[i];
  }
}
console.log(largest);

