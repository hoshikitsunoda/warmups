const reject = require('./main.js')
const { expect } = require('chai')

const users = [
  { 'user': 'barney', 'age': 36, 'active': false },
  { 'user': 'fred',   'age': 40, 'active': true }
]

describe('Reject', () => {
  it('with not active user', () => {
    const expected = [{user: "fred", age: 40, active: true}]
    expect(reject(users, function(o) { return !o.active })).eql(expected)
  })
  it('with not active user', () => {
    const expected = [{user: "barney", age: 36, active: false}]
    expect(reject(users, function(o) { return o.age === 40 })).eql(expected)
  })
})
