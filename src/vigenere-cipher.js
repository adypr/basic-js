const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement class VigenereCipheringMachine that allows us to create
 * direct and reverse ciphering machines according to task description
 * 
 * @example
 * 
 * const directMachine = new VigenereCipheringMachine();
 * 
 * const reverseMachine = new VigenereCipheringMachine(false);
 * 
 * directMachine.encrypt('attack at dawn!', 'alphonse') => 'AEIHQX SX DLLU!'
 * 
 * directMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => 'ATTACK AT DAWN!'
 * 
 * reverseMachine.encrypt('attack at dawn!', 'alphonse') => '!ULLD XS XQHIEA'
 * 
 * reverseMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => '!NWAD TA KCATTA'
 * 
 */

const table = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z',
                'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];

class VigenereCipheringMachine {
  constructor (direction = 'true'){
  this.direction = direction;
  }
  encrypt(word, key) {
    if (!word || !key) throw new Error('Incorrect arguments!');
    let keyArr = key.split('').map((elem) => table.indexOf(elem));
    let count = 0;
    let criptPhrase = word.split('').map((elem) => {
      let letter = elem;
      
      if (table.includes(elem)) {
        let resKey = table.indexOf(elem) + keyArr[count];
        resKey = resKey > 55 ? resKey - 52 : resKey;
        
        letter = table[resKey];
        count += 1;
      if (count === keyArr.length) count = 0;
      }
      
      return letter.toUpperCase();
    });
    return !this.direction ? criptPhrase.reverse().join('') : criptPhrase.join('');
  }
  decrypt(word, key) {
    if (!word || !key) throw new Error('Incorrect arguments!');

    let keyArr = key.split('').map((elem) => table.indexOf(elem));
    
    let count = 0;
    let criptPhrase = word.split('').map((elem) => {
      let letter = elem;
      
      if (table.includes(elem)) {
     
        
        let resKey = table.indexOf(elem) - keyArr[count];
      
        resKey = resKey < 0 ? 51 + resKey : resKey;
        
        letter = table[resKey];
        
        count += 1;
      if (count === keyArr.length) count = 0;
      }
      
      return letter.toUpperCase();
    });
    return !this.direction ? criptPhrase.reverse().join('') : criptPhrase.join('');
  }
}

module.exports = {
  VigenereCipheringMachine
};

