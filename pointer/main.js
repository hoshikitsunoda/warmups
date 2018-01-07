var $body = document.querySelector('.light')
var rect = $body.getBoundingClientRect()

function point(event) {
  var x = event.pageX
  var y = event.pageY

  $body.style.transform = 'translate3d(' + x + 'px, ' + y + 'px, 0)'
}

document.addEventListener('mousemove', point, false)
