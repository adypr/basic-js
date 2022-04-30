const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create a repeating string based on the given parameters
 *  
 * @param {String} str string to repeat
 * @param {Object} options options object 
 * @return {String} repeating string
 * 
 *
 * @example
 * 
 * repeater('STRING', { repeatTimes: 3, separator: '**', 
 * addition: 'PLUS', additionRepeatTimes: 3, additionSeparator: '00' })
 * => 'STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS'
 *
 */
function repeater( str, { repeatTimes = '1', separator = '+', addition = '', additionRepeatTimes = 0, additionSeparator = '|'} ) {
  const addAddition = (ad) => {
    let resAddition = ad;
    for (let j = 1; j < additionRepeatTimes; j += 1) {
      resAddition += additionSeparator;
      resAddition += ad;
    }
    return resAddition;
  }
  let resStr = str;
  resStr += addAddition(addition);
  for (let i = 1; i < repeatTimes; i += 1) {
    
    resStr += separator;
    resStr += str;
    resStr += addAddition(addition);
  }
  return resStr;
}

module.exports = {
  repeater
};

