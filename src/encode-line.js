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
  return str.split('')
            .reduce((acc, elem) => {
              if (acc[acc.length - 1] && acc[acc.length - 1][1] === elem) acc[acc.length - 1][0] += 1;
              else acc.push([1, elem]);
              return acc;
            }, [])
            .map((elem) => {
              return elem[0] === 1 ? elem[1] : `${elem[0]}${elem[1]}`;
            })
            .join('');
}

module.exports = {
  encodeLine
};

// My desision for all includes

// function encodeLine(str) {
//   let arr = [];
//   for (let i = 0; i < str.length; i += 1) {
//     let regexp = new RegExp(`${str[i]}`, 'gi');
//     let num = str.match(regexp).length;
//     if (num === 1) num = '';
//     arr.push(`${num}${str[i]}`)
//   }
//   return Array.from((new Set(arr))).join('');
// }

console.log(encodeLine('aabbbca'))