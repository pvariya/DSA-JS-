// 1. Rotate a 2D Matrix by 90 Degrees Clockwise:

// Example Input:
// matrix = [
// [1, 2, 3],
// [4, 5, 6],
// [7, 8, 9]
// ]

// Example Output:
// matrix = [
// [7, 4, 1],
// [8, 5, 2],
// [9, 6, 3]
// ]
let matrix = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
];

const rotate = (matrix) => {
  for (let i = 0; i < matrix.length; i++) {
    for (let j = i + 1; j < matrix.length; j++) {
      [matrix[i][j], matrix[j][i]] = [matrix[j][i], matrix[i][j]];
    }
  }
  for (let i = 0; i < matrix.length; i++) {
    matrix[i].reverse();
  }
  return matrix;
};

console.log(rotate(matrix));
