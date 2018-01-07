// Reject function takes a collection(either array or object) and predicate(function) as argument.
// Reject returns a new filtered array with collection is not truthy.
//
// If var users = [
//   { 'user': 'barney', 'age': 36, 'active': false },
//   { 'user': 'fred',   'age': 40, 'active': true }
// ];
//
// and input is
//  users, function(o) { return !o.active; }
//
// then output will be object for ['fred']

const users = [
  { 'user': 'barney', 'age': 36, 'active': false },
  { 'user': 'fred',   'age': 40, 'active': true }
]

// function reject(collection, predicate) {
//   return collection.filter(item => !predicate(item))
// }

const reject = (collection, predicate) => collection.filter(item => !predicate(item))

// function reject(collection, predicate) {
//   var newArr = []
//   collection.forEach((item) => {
//     if (!predicate(item)) {
//       newArr.push(item)
//     }
//   })
//   return newArr
// }

console.log(reject(users, function(o) { return !o.active }))
console.log(reject(users, function(o) { return o.age === 40 }))
console.log(reject(users, function(o) { return o.user === 'hoshiki' }))

module.exports = reject
