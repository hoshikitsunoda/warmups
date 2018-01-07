const functions = require('./functions.js')
const { expect } = require('chai')
const lodash = require('lodash')

function Car(make, model, year) {
  this.make = make
  this.model = model
  this.year = year
}

const me = {
  'name': 'hosh',
  'age': 33
}

const add = (x, y) => {
  return x + y
}

describe('Functions', () => {
  it('takes object as an argument', () => {
    expect(functions(me)).eql([])
  })
  it('takes constructor as an argument', () => {
    expect(functions(new Car)).eql(['make', 'model', 'year'])
  })
  it('takes string as an argument', () => {
    expect(functions('hello world')).eql([])
  })
  it('takes function as an argument', () => {
    expect(functions(add(1, 5))).eql([])
  })
})
