// Maximum Sum of Contiguous Subarray of Size k:

// Sample Input 1:
// arr = [1, 3, 2, 6, -1, 4, 1, 8, 2], k = 3

// Sample Output 1:
// 13 (for the subarray [6, -1, 4])

// Sample Input 2:
// arr = [4, 2, 1, 7, 8, 1, 2, 8, 1, 0], k = 4

// Sample Output 2:
// 23 (for the subarray [7, 8, 1, 7])

let arr = [1, 3, 2, 6, -1, 4, 1, 8, 2],
  k = 3;

const maxSumSubarray = (arr, k) => {
  let currSum = 0;
  let maxSum = 0;
  if (0 < k) {
    for (let i = 0; i < k; i++) {
      currSum += arr[i];
    }
    maxSum = currSum;

    for (let i = k; i < arr.length; i++) {
      currSum = currSum - arr[i - k] + arr[i];
      maxSum = Math.max(maxSum, currSum);
    }
    console.log(maxSum);
  } else {
    console.log("not reqired k length");
  }
};

maxSumSubarray(arr, k);
