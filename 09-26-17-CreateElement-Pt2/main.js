// declare function.
// add array of functions to create documents(elements)/set attributes and assign it to const.
/*
function createElement(tagName, attributes, children) {

  const div = function div() {
      var $body = document.getElementById('parent')
      var $el = document.createElement(tagName)
      $el.setAttribute(attributes)
      $body.appendChild($el)
    }

    return div
  }
*/

function createElement(tagName, attributes, children) {
  const $element = document.createElement(tagName)
  for (const key in attributes) {
    $element.setAttribute(key, attributes[key])
  }
  for (let i = 0; i < children.length; i++) {
    $element.appendChild(children[i])
  }
  return $element
}
