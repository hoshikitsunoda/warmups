const truncate = require('./truncate.js')
const { expect } = require('chai')

describe('Truncate', () => {
  it('with length and empty space separator', () => {
    expect(truncate('Cash rules everything around me, C.R.E.A.M. Get the money, dollar dollar bill, yall', {'length': 24, 'separator': ' '})).to.equal('Cash rules everything...')
  })
  it('with length and regExp separator', () => {
    expect(truncate('osu, ora goku, iccho yattemikka', {'length': 24, 'separator': /,? +/})).to.equal('osu, ora goku, iccho ...')
  })
  it('with omission', () => {
    expect(truncate('osu, ora goku, iccho yattemikka', {'omission': ' [...]'})).to.equal('osu, ora goku, iccho yat [...]')
  })
  it('with different string and length', () => {
    expect(truncate('Cash rules everything around me, C.R.E.A.M. Get the money, dollar dollar bill, yall', {'length': 30})).equal('Cash rules everything aroun...')
  })
})
