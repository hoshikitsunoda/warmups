// const lists = ['ash', 'ash is', 'ash is 31yo', 'bob']
//
// const suggest = (list, char) => {
//   const newSug = []
//   for (let i = 0; i < list.length; i++) {
//     if (list[i].slice(0, char.length) === char) {
//       newSug.push(list[i])
//     }
//   }
//   return newSug
// }
//
// const $input = document.querySelector('input')
// const $ul = document.querySelector('ul')
//
// $input.addEventListener('keyup', (event) => {
//   const char = event.key
//   const result = suggest(lists, char)
//   // const autoComp = result.toString().substring(1)
//   if (char === 'Backspace') {
//     $ul.innerHTML = ''
//   }
//   else {
//     for (let i = 0; i < result.length; i++) {
//       const suggestion = "<li>" + result[i] + "</li>"
//       $ul.innerHTML += suggestion
//     }
//     document.body.appendChild($ul)
//   }
// })

function compact(array) {
  return array.filter(element => element)
}

console.log(compact([1, 2]))
console.log(compact(['', 2]))
console.log(compact([]));
