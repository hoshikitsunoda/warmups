var names = ['ho', 'shi', 'ki']

const filter = (list, predicate) => {
  const filtered = []
  for (var i = 0; i < list.length; i++) {
    var item = list[i] //store list at index in const item
    if(predicate(item)) {
      filtered.push(item)
    }
  }
  return filtered
}

filter(names, (names) => {
  document.write(names)
})

/*

function filter(list, predicate) {
  var newArr = []
  for (var i = 0; i < list.length; i++) {
    var item = list[i]
    if(predicate(item)) {
      newArr.push(item)
    }
  }
  return newArr
}

filter(names, (names) => {
  document.write(names)
})

*/
