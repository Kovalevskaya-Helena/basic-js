const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given matrix, a rectangular matrix of integers,
 * just add up all the values that don't appear below a "0".
 *
 * @param {Array<Array>} matrix
 * @return {Number}
 *
 * @example
 * matrix = [
 *  [0, 1, 1, 2],
 *  [0, 5, 0, 0],
 *  [2, 0, 3, 3]
 * ]
 * console.log({ elemet, rowIndex, colIndex })
 * The result should be 9
 */

const matrix = [
    [0, 1, 1, 2],
    [0, 5, 0, 0],
    [2, 0, 3, 3]
   ];

function getMatrixElementsSum( matrix ) {
  let sum = 0;
  matrix.forEach((row, rowIndex) => {
    row.forEach((element, colIndex) => {
      if (matrix[rowIndex-1]?.[colIndex]!==0) {
        sum +=matrix[rowIndex][colIndex];
      }
    });
  });
  return sum;
}

console.log(getMatrixElementsSum(matrix));

module.exports = {
  getMatrixElementsSum
};
