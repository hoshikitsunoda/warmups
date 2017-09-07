/* eslint-disable no-unused-vars */
var drink = ['water', 'coffee']

function flip(drink) {
  var reversed = []
  var chug = drink.length
  for (var i = (chug - 1); i >= 0; i--) {
    reversed.push(drink[i])
  }
  return reversed
}
