const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given an array of domains, return the object with the appearances of the DNS.
 *
 * @param {Array} domains
 * @return {Object}
 *
 * @example
 * domains = [
 *  'code.yandex.ru',
 *  'music.yandex.ru',
 *  'yandex.ru'
 * ]
 *
 * The result should be the following:
 * {
 *   '.ru': 3,
 *   '.ru.yandex': 3,
 *   '.ru.yandex.code': 1,
 *   '.ru.yandex.music': 1,
 * }
 *
 */
function getDNSStats(domains) {
  let arr1 = domains.map(el =>  el.split('.').reverse())
  .map(e => e.map(el => '.' + el))
  .map(el => {
      let k = ''
      return el.map(e => {
                  k += e
                  return k
              })
  })
  .reduce((acc, el)=>(acc.concat(el)),[])
  .sort((a,b)=>(a.length - b.length))  
let arr2 = [...new Set(arr1)]       
let res = {}, count = 0;
arr2.forEach(e => {
arr1.forEach(el =>{
if (e == el){
count++
}
})
res[e] = count
count = 0
}); 
return res
}

module.exports = {
  getDNSStats
};
