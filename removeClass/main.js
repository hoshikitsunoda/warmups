// const removeClass = (elements, ...classes) => document.querySelector(elements).classList.remove(...classes)

// const removeClass = (elements, ...classes) => {
//   const $elements = document.getElementsByTagName(elements)
//   for (let i = $elements.length -1; i >= 0; i--) {
//     $elements[i].classList.remove(...classes)
//   }
// }

const removeClass = (elements, ...classes) => {
  const $elements = document.querySelectorAll(elements)
  $elements.forEach(element => {
    element.classList.remove(...classes)
  })
}

// removeClass(['div', 'h1'], 'here', 'are', 'more')

module.exports = removeClass
