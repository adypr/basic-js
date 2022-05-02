const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement chainMaker object according to task description
 * 
 */
const chainMaker = {
  chain: [], 

  getLength() {
    return this.chain.length;
  },
  addLink(value) {
    this.chain.push(value);
    return this;
  },
  removeLink(position) {
    if (typeof position === 'number' && position % 1 === 0 && (position - 1 >= 0 && position < this.chain.length)) {
      this.chain.splice(position - 1, 1);
    }
    else {
      this.chain = [];
      throw new Error("You can\'t remove incorrect link!");
    } 
    return this;
  },
  reverseChain() {
    this.chain.reverse();
    return this;
  },
  finishChain() {
    let str = `( ${this.chain[0]} )`;
    for (let i = 1; i < this.chain.length; i +=1) {
      str += '~~';
      str += `( ${this.chain[i]} )`;
    }
    this.chain = []
    return str;
  }
};

module.exports = {
  chainMaker
};

//console.log(chainMaker.addLink(1).addLink(2).reverseChain().addLink(3).finishChain());
//console.log(chainMaker.addLink('GHI').addLink(null).reverseChain().addLink(333).reverseChain().reverseChain().addLink(0).reverseChain().reverseChain().addLink('GHI').finishChain())
//chainMaker.addLink(5).addLink(7);
//chainMaker.addLink(5).addLink(7);

// console.log(chainMaker.addLink(null).addLink(false).addLink(22)
//                       .reverseChain().reverseChain()
//                       .removeLink(2)
//                       .reverseChain().reverseChain()
//                       .addLink({ 0: 'first', 1: 'second', 'length': 2 })
//                       .reverseChain().addLink('DEF').finishChain());
