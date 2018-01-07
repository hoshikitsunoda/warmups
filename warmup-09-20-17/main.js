var numbers = [5, 10, 15, 20]

function map(list, transform) {
  var newList = []
  for (var i = 0; i < list.length; i++) {
    var item = list[i]
    newList.push(transform(item))
  }
  return newList
}

map(numbers, (number) => {
  document.write(number + 60 + ' ')
})
