// 9: Check if Array is Sorted

let input = [1, 2, 5, 4, 5];

let sorted = input.sort();

let isSorted = true;

for (let i = 0; i < sorted.length; i++) {
  if (sorted[i] !== input[i]) {
    isSorted = false;
    break;
  }
}

if (isSorted) {
  console.log("The array is sorted.");
} else {
  console.log("The array is not sorted.");
}
