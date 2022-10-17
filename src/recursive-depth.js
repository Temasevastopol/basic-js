const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement class DepthCalculator with method calculateDepth
 * that calculates deoth of nested array
 * 
 * @example
 * 
 * const depthCalc = new DepthCalculator();
 * depthCalc.calculateDepth([1, 2, 3, 4, 5]) => 1
 * depthCalc.calculateDepth([1, 2, 3, [4, 5]]) => 2
 * depthCalc.calculateDepth([[[]]]) => 3
 *
 */
class DepthCalculator {
  calculateDepth(arr) {   
        
      let count = 1
      let res  = []
      for (let i = 0; i < arr.length; i++){
          if(Array.isArray(arr[i])){            
              for(let k = 0; k < arr[i].length; k++){
                  res.push(arr[i][k])
              }
          }
      }
    
      return (res.length == 0)    ? count : count + calculateDepth(res)
  }
}

module.exports = {
  DepthCalculator
};
