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
  let maxNumber = 0;
  let arr = String(n).split('');
  arr.map((num, i, array) => {
    let resArr = [...array];
    resArr.splice(i, 1);
    let resNum = +resArr.join('');
    maxNumber = resNum > maxNumber ? resNum : maxNumber;
  })
  return maxNumber;
}

module.exports = {
  deleteDigit
};

