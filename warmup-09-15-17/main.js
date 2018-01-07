/*var $nav = document.querySelector('nav')

$nav.addEventListener('click', function(event) {
  var $hidden = document.querySelector('div')
    $hidden.classList.remove('hidden')
})*/

function showView(viewId) {
  var $views = document.querySelectorAll('.view')
  for (var i = 0; i < $views.length; i++) {
    var $view = $views[i]
    if ($view.getAttribute('id') === viewId) {
      $view.classList.remove('hidden')
    }
    else {
      $view.classList.add('hidden')
    }
  }
}

var $nav = document.querySelector('nav')

$nav.addEventListener('click', function (event) {
  var viewId = event.target.getAttribute('data-view-id')
  if (viewId !== null) {
    showView(viewId)
  }
})
