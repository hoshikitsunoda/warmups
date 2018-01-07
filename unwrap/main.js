// const $h1 = document.createElement('h1')
// const $h2 = document.createElement('h2')
// const $ul = document.createElement('ul')
// const $li = document.createElement('li')
//
// $h1.textContent = 'H1 here'
// $h2.textContent = 'H2 here'
// $ul.textContent = 'unordered list'
// $li.textContent = 'ordered list'
//
// $ul.appendChild($li)
// $h2.appendChild($ul)
// $h1.appendChild($h2)
// document.body.appendChild($h1)

// const $h1 = document.querySelector('h1')
// const $h2 = document.querySelector('h2')
// const $ul = document.querySelector('ul')
// const $li = document.querySelector('li')

// const removeParent = element => element.parentNode.replaceWith(element)

const removeParent = element => {
  const parent = document.createDocumentFragment()
  while(element.firstChild) {
    element.parentNode.insertBefore(element.firstChild, element)
  }
  element.parentNode.removeChild(element)
}

// removeParent($h1)
// removeParent($ul)
// removeParent($li)

module.exports = removeParent
