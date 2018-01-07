/* eslint-disable no-unused-vars */

/*
var pali = 'hoshsoh'

function isPalindrome(pali) {
  var strReverse = pali.split('').reverse().join('')
  if (pali === strReverse) {
    return true
  } else {
    return false
  }
}
*/

var people = ['Ron', 'Celeste', 'Victor', 'Tim']

function forEach(list, procedure) {
  var newList = []
  var len = list.length
  for (var i = 0; i < len; i++) {
    newList.push(list[i])
  }
  return newList
}
