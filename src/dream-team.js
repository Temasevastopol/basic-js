const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create name of dream team based on the names of its members
 *  
 * @param {Array} members names of the members 
 * @return {String | Boolean} name of the team or false
 * in case of incorrect members
 *
 * @example
 * 
 * createDreamTeam(['Matt', 'Ann', 'Dmitry', 'Max']) => 'ADMM'
 * createDreamTeam(['Olivia', 1111, 'Lily', 'Oscar', true, null]) => 'LOO'
 *
 */
function createDreamTeam(members) {
  if(!Array.isArray(members)){
    return false
  }
  let res = members.reduce((acc, el)=>{
    if(typeof el === 'string'){      
      el = el.trim()
      acc.push(el[0].toUpperCase())
    }
    return acc.sort()
  }, []).join('')

  return (typeof res === 'string' && res.length > 0) ? res : false
}

module.exports = {
  createDreamTeam
};
