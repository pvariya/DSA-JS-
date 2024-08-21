// Maximum Product of Contiguous Subarray of Size k

// Constraints:
// - All elements in the input array will be positive integers.
// - k will be a positive integer.

// Sample Input 1:
// arr = [2, 5, 3, 1, 8, 9, 2], k = 2

// Sample Output 1:
// 72 (for the subarray [8, 9])

// Sample Input 2:
// arr = [4, 2, 6, 3, 8], k = 3

// Sample Output 2:
// 144 (for the subarray [6, 3, 8]

let arr = [2, 5, 3, 1, 8, 9, 2],
  k = 2;

const maxProductSubarray = (arr, k) => {
  let currMul = 1;
  let maxMul = 0;
  if (0 < k) {
    for (let i = 0; i < k; i++) {
      currMul *= arr[i];
    }
    maxMul = currMul;

    for (let i = k; i < arr.length; i++) {
      currMul = (currMul / arr[i - k]) * arr[i];
      maxMul = Math.max(maxMul, currMul);
    }
    console.log(maxMul);
  } else {
    console.log("not reqired k length");
  }
};
maxProductSubarray(arr, k);
