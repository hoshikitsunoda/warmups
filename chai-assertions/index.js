const chai = require('chai')
const expect = chai.expect

const number = 6

if(expect(number).to.equal(6)) {
  console.log('passed!');
}

const foo = 'bar'
if(expect(foo).to.be.a('string')) {
  console.log('match!');
}
