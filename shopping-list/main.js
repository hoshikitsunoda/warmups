/* eslint-disable no-unused-vars */

var $list = document.getElementById('list')
var $input = document.getElementById('input')
var $delete = document.getElementById()

$input.focus()
$input.select()

$input.addEventListener('keypress', function clickListener(e) {
  console.log(e)
  var key = e.which || e.keyCode
  if (key === 13) {
    var $li = document.createElement('li')
    $li.textContent = $input.value
    $list.appendChild($li)
    $input.value = ''
  }
})
