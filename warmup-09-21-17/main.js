/*

var numbers = [1, 2, 3, 4, 5]

function reduce(list, combinator, initialValue) {
  var combined = initialValue
  for(var i = 0; i < list.length; i++) {
    var item = list[i]
    combined = combinator(combined, item)

  }
  return combined
}

*/

var numbers = [1, 2, 3, 4, 5]

function reduce(list, combinator, initialValue) {
  var combined = initialValue
  for (var i = 0; i < list.length; i++) {
    var item = list[i]
    combined = combinator(combined, item)
  }
  return combined
}
