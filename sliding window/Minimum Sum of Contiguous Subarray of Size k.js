// Minimum Sum of Contiguous Subarray of Size k:
// Sample Input 1:
// arr = [4, 2, 1, 7, 8, 1, 2, 8, 1, 0], k = 3

// Sample Output 1:
// 3 (for the subarray [1, 1, 1])

// Sample Input 2:
// arr = [3, 7, 1, 8, 6, 4], k = 2

// Sample Output 2:
// 4 (for the subarray [3, 1])


let arr = [4, 2, 1, 7, 8, 1, 2, 8, 1, 0],
  k = 3;

const minSumSubarray = (arr, k) => {
    let currSum = 0;
    let maxSum ;
    if (0 < k) {
      for (let i = 0; i < k; i++) {
        currSum += arr[i];
      }
      maxSum = currSum;
  
      for (let i = k; i < arr.length; i++) {
        currSum = currSum - arr[i - k] + arr[i];
        maxSum = Math.min(maxSum, currSum);
      }
      console.log(maxSum);
    } else {
      console.log("not reqired k length");
    }
}

minSumSubarray(arr, k);
