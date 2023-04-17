const { NotImplementedError } = require('../extensions/index.js');

/**
 * Extract season from given date and expose the enemy scout!
 *
 * @param {Date | FakeDate} date real or fake date
 * @returns {String} time of the year
 *
 * @example
 *
 * getSeason(new Date(2020, 02, 31)) => 'spring'
 *
 */

const date = new Date(2020, 56);



function getSeason(date) {
  if (date === undefined) {
    return 'Unable to determine the time of year!'
  }

  const months = {
    0:'winter',
    1:'winter',
    2:'spring',
    3:'spring',
    4:'spring',
    5:'summer',
    6:'summer',
    7:'summer',
    8:'autumn',
    9:'autumn',
    10: 'autumn',
    11:'winter',
  };

  if (date instanceof Date && date.toString === Date.prototype.toString && date.toString() !== 'Invalid Date') {
    return months[date.getMonth()];
  }

  throw new Error('Invalid date!');
}

getSeason(date);



module.exports = {
  getSeason
};
