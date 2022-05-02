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

const comands = ['--discard-next', '--double-next', '--discard-prev', '--double-prev'];

function transform(arr) {
  if (!(arr instanceof Array)) throw new Error("\'arr\' parameter must be an instance of the Array!");
  return [...arr].reduce((acc, elem, i, array) => {
    if (acc[acc.length - 1] && acc[acc.length - 1] === '--discard-next') {
      acc.pop();
      return acc;
    } 
    if (acc[acc.length - 1] && acc[acc.length - 1] === '--double-next') {
      acc.pop();
      acc.push(elem);
      acc.push(elem);
      return acc;
    }

    if (!comands.includes(elem)) {
      acc.push(elem);
        return acc;
    }

    if ( (elem === '--discard-next' && array[i + 1]) || (elem === '--double-next' && array[i + 1])) {
      acc.push(elem);
      return acc;
    } 

    if (elem === '--discard-prev') {
      if (acc.length > 0) acc.pop();
      return acc;
    }
    if (elem === '--double-prev') {
      if (acc.length > 0) acc.push(acc[acc.length - 1]);
      return acc;
    }

    

    return acc;
  }, []);

}

module.exports = {
  transform
};


//console.log(transform([1, 2, 3, '--discard-next', 1337, '--double-prev', 4, 5]))