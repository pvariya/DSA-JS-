// Spiral Order of a 2D Matrix:

// - Use four boundaries: top, bottom, left, and right.
// - Move from left to right, top to bottom, right to left, and bottom to top in the matrix, adjusting the
// boundaries after each pass.
// - Continue this process until all elements are covered.

// Example Input:
// matrix = [
// [1, 2, 3],
// [4, 5, 6],
// [7, 8, 9]
// ]

// Example Output: [1, 2, 3, 6, 9, 8, 7, 4, 5]


function spiralOrder(matrix) {
  const result = [];
  let top = 0;
  let bottom = matrix.length - 1;
  let left = 0;
  let right = matrix[0].length - 1;

  for (let i = 0; i < matrix.length * matrix[0].length; i++) {
    if (left <= right) {
      for (let j = left; j <= right; j++) {
        result.push(matrix[top][j]);
      }
      top++;
    }

    if (top <= bottom) {
      for (let j = top; j <= bottom; j++) {
        result.push(matrix[j][right]);
      }
      right--;
    }

    if (left <= right) {
      for (let j = right; j >= left; j--) {
        result.push(matrix[bottom][j]);
      }
      bottom--;
    }

    if (top <= bottom) {
      for (let j = bottom; j >= top; j--) {
        result.push(matrix[j][left]);
      }
      left++;
    }
  }

  return result;
}

// Example usage:
const matrix = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
];

const result = spiralOrder(matrix);
console.log(result); // Output: [1, 2, 3, 6, 9, 8, 7, 4, 5]
