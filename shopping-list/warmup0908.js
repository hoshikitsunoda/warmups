/* eslint-disable no-unused-vars */

var collection = [
  {
    id: 1,
    brand: 'bbb',
    name: 'aaa'
  },
  {
    id: 2,
    brand: 'ddd',
    name: 'ccc'
  },
  {
    id: 3,
    brand: 'fff',
    name: 'ddd'
  },
  {
    id: 3,
    brand: 'fff',
    name: 'ggg'
  }
]

function findById(id, collection) {
  for (var i = 0; i < collection.length; i++) {
    if (id === collection[i].id) {
      return collection[i]
    }
  }
}
