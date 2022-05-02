const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create transformed array based on the control sequences that original
 * array contains
 * 
 * @param {Array} arr initial array
 * @returns {Array} transformed array
 * 
 * @example
 * 
 * transform([1, 2, 3, '--double-next', 4, 5]) => [1, 2, 3, 4, 4, 5]
 * transform([1, 2, 3, '--discard-prev', 4, 5]) => [1, 2, 4, 5]
 * 
 */
function transform(arr) {
  // console.log(arr)
  if (!Array.isArray(arr)){
    throw new Error("'arr' parameter must be an instance of the Array!")
  }
  let res = []
  for (let i = 0; i < arr.length; i++){
    if ( i == 0 && (arr[i] == '--discard-prev' || arr[i] == '--double-prev')){
                i += 1
    }    
    if ( i == arr.length - 1 && (arr[i] == '--double-next' || arr[i] == '--discard-next')){
                break
    }
    if (arr[i] == '--discard-next' && (arr[i+2] == '--double-prev' || arr[i+2] == '--discard-prev')){
                i += 3
    }
    if (arr[i] == '--discard-next' && arr[i+2] !== '--double-prev' && arr[i+2] !== '--discard-prev'){
                i += 2
    }
    if (arr[i] == `--discard-prev`){
                res.pop()
    }
    if (arr[i] == `--double-next`){
                res.push(arr[i+1])
                i += 1
    }
    if (arr[i] == `--double-prev`){
      res.push(arr[i-1])
      i += 1
}
    if (arr[i] !== `--discard-prev`)  {
                res.push(arr[i])
    }         
    
  }

  return res
  // throw new NotImplementedError('Not implemented');
  // remove line with error and write your code here
}

module.exports = {
  transform
};
