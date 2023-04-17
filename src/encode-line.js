const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given a string, return its encoding version.
 *
 * @param {String} str
 * @return {String}
 *
 * @example
 * For aabbbc should return 2a3bc
 *
 */

const str = 'aaabbc';

function encodeLine( str ) {
  const arr = str.split('');

  const res = arr.reduce((acc, i) => {
    if (!acc.hasOwnProperty(i)) {
      acc[i] = 0;
    }

      acc[i] += 1;
    return acc;
  }, {})

  let result = '';

  for (let key in res) {
    result += res[key] === 1 ? key : `${res[key]}${key}`;
  }

  return result;
}

console.log(encodeLine('abbcca'))

module.exports = {
  encodeLine
};
