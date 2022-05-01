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
function deleteDigit(n) {
  let a = '' + n
  let res = ''
  let Arr = []
  // console.log(a)
  for (let i = 0; i < a.length; i++){
      for (let j = 0; j < a.length; j++){
        if (i !== j){
          res += a[j]
        }    
       
      }
      Arr.push(+res)
      // console.log(Arr)
      res =''
  }
  Arr.sort((a,b)=>(b-a))
  return Arr[0]
}

module.exports = {
  deleteDigit
};
