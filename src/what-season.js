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
function getSeason(date) {
  if (isNaN(Date.parse(date))){
    throw new Error('Invalid date!')
  }
  let a = date.getMonth()
  if (a >= 0 && a <2 || a == 11){
    return 'winter'
  }
  if (a>=2 && a <= 4){
    return 'spring'
  }
  if (a>=5 && a<= 7){
    return 'summer'
  }
  if (a >= 8 && a<= 10){
    return 'autumn'
  }
  // throw new NotImplementedError('Not implemented');
  // remove line with error and write your code here
}

module.exports = {
  getSeason
};
