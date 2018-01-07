// Functions takes object as an argument.
// Functions returns the array with function names inside of it.

// If input is
//
//   function Foo() {
//     this.a = _.constant('a');
//     this.b = _.constant('b');
//   }
//
//   Foo.prototype.c = _.constant('c');
//
//   _.functions(new Foo);
//
// Then output will be
//
//   ['a', 'b']

function Foo() {
  this.a = _.constant('a');
  this.b = _.constant('b');
}

const me = {
  'name': 'hosh',
  'age': 33
}

Foo.prototype.c = 'c'

const functions = (object) => {
  const newArr = []
  if (typeof object === 'object') {
    for (var key in object) {
      if (object.hasOwnProperty(key) && typeof object[key] === 'function') {
        newArr.push(key)
      }
    }
  }
  else {
    return newArr
  }
  return newArr
}

console.log(functions(new Foo))
console.log(functions(me))
console.log(functions('hello world'))

module.exports = functions
