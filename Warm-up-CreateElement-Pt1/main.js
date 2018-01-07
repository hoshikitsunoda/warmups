function createElement(tagName, attributes) {
  var newEl = document.createElement(tagName)
  var newAt = newEl.createAttribute(attributes)
  var newElAt = newEl.setAttribute(newAt, value)
  return newElAt
}


//solution
function createElement(tagName, attributes) {
  const $element = document.createElement(tagName)
  for (const key in attributes) {
    $element.setAttribute(key, attributes[key])
  }
  return $element
}
