const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */

function deleteDigit( n ) {
  const stringedN = String(n);
  let max = stringedN.slice(1);

  stringedN.split('').forEach((_, index) => {
    const nextMax = stringedN.slice(0, index) + stringedN.slice(index + 1);

    max = Math.max(nextMax, max)
  });

  return max;
}


module.exports = {
  deleteDigit
};
