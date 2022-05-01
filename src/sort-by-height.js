const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given an array with heights, sort them except if the value is -1.
 *
 * @param {Array} arr
 * @return {Array}
 *
 * @example
 * arr = [-1, 150, 190, 170, -1, -1, 160, 180]
 *
 * The result should be [-1, 150, 160, 170, -1, -1, 180, 190]
 */
function sortByHeight(arr) {
  let Arr = []
  let resArr = arr
  let count = 0
  for (let i = 0; i < arr.length; i++){
    if (arr[i] !== -1){
      Arr.push(arr[i])
    }
  }
  Arr.sort((a, b)=>(a-b))
  for (let j = 0; j < resArr.length; j++){
    if (resArr[j] !== -1){
      resArr[j] = Arr[count]
      count++
    }
  }
  return resArr
}

module.exports = {
  sortByHeight
};
