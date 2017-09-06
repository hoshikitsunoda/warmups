/* eslint-disable no-unused-vars */

var letters = ['hoshi', 'ki', 'tsunodalion']

function longest(letters) {
  var long = 0
  for (var i = 0; i < letters.length; i++) {
    if (letters[i].length > long) {
      long = letters[i].length
      var lgst = letters[i]
    }
  }
  return lgst
}
