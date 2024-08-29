// let arr = [2, 1, 5, 1, 3, 2]
// const product = (arr) => {
//     let sum = 1
//     for (let ele of arr) {
//         sum += ele
//     }
//     return sum
// }

// let max = 0
// for (let i = 0; i < arr.length; i++) {
//     let SubArr = []
//     for (let j = 0; j < arr.length; j++) {
//         SubArr.push(arr[j])
//         let cursum = product(SubArr)
//         if (cursum > max) {
//             max = cursum
//         }
//     }
// }


function maxSumSubarray(arr, k) {
    let maxSum = -Infinity;
    let currentSum = 0;

    for (let i = 0; i < arr.length; i++) {
        currentSum += arr[i];
        if (i >= k) {
            currentSum -= arr[i - k];
        }
        if (i >= k - 1) {
            maxSum = Math.max(maxSum, currentSum)
        }
    }

    return maxSum;
}

let arr = [2, 1, 5, 1, 3, 2];
let k = 3;
console.log(maxSumSubarray(arr, k)); 