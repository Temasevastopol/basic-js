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
function encodeLine(str) {
  let res = ''
  let control = ''
  let count = 0
  for (let i = 0; i < str.length; i++){
    if (!control.includes(str[i])){
      for (let j = i; j < str.length; j++){
        if (str[i] == str[j]){
          count++
          console.log (count)
        } else {
          break
        }
      }
      res += (count >1) ? count + str[i] : str[i]    
      count = 0
      control = str[i]
    }
  }
  return res
}

module.exports = {
  encodeLine
};
