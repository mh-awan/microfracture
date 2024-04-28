const { expect } = require('./lib');

const x = 4;

console.log(expect(x).to.be.ofNumericType);
console.log(expect(x).to.equal(4));
console.log(expect(x).to.equal(5));
