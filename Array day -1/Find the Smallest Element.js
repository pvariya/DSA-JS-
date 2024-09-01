// Find the Smallest Element

// Write a function to find the smallest element in an array.

// Input: [3, 7, 1, 9, 2]

// Output: 1

let arr = [3, 7, 1, 9, 2];

let smallest = arr[0];

for (let i = 1; i < arr.length; i++) {
  if (smallest > arr[i]) {
    smallest = arr[i];
  }
}
console.log(smallest);
