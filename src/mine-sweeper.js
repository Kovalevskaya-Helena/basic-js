const { NotImplementedError } = require('../extensions/index.js');

/**
 * In the popular Minesweeper game you have a board with some mines and those cells
 * that don't contain a mine have a number in it that indicates the total number of mines
 * in the neighboring cells. Starting off with some arrangement of mines
 * we want to create a Minesweeper game setup.
 *
 * @param {Array<Array>} matrix
 * @return {Array<Array>}
 *
 * @example
 * matrix = [
 *  [true, false, false],
 *  [false, true, false],
 *  [false, false, false]
 * ]
 *
 * The result should be following:
 * [
 *  [1, 2, 1],
 *  [2, 1, 1],
 *  [1, 1, 1]
 * ]
 */

const matrix = [
   [true, false, false],
   [false, true, false],
    [false, false, false]
   ]
function minesweeper(matrix) {

  const result = matrix.map((row, rowIndex) => {
    return row.map((element,colIndex)=>{
      let sum =0;
      if (matrix[rowIndex-1]?.[colIndex]){
        sum+=1;
      }
      if (matrix[rowIndex+1]?.[colIndex]){
        sum+=1;
      }
      if (matrix[rowIndex]?.[colIndex-1]){
        sum+=1;
      }
      if (matrix[rowIndex]?.[colIndex+1]){
        sum+=1;
      }
      if (matrix[rowIndex-1]?.[colIndex-1]){
        sum+=1;
      }
      if (matrix[rowIndex+1]?.[colIndex-1]){
        sum+=1;
      }
      if (matrix[rowIndex+1]?.[colIndex+1]){
        sum+=1;
      }
      if (matrix[rowIndex-1]?.[colIndex+1]){
        sum+=1;
      }

      return sum;
    })
  });
 return result;
}

console.log(minesweeper(matrix));

module.exports = {
  minesweeper
};
