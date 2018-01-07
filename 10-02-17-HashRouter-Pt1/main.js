// location.hash changes
/*
const $view = document.querySelector('view')
const $fire = document.querySelector('#fire')
const $water = document.querySelector('#water')
const $grass = document.querySelector('#grass')



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

window.addEventListener('hashchange', function (event) {
  if (event.target.location.hash.includes('fire')) {
    showView($fire)
  }
  else if (event.target.location.hash.includes('water')) {
    showView($water)
  }
  else if (event.target.location.hash.includes('grass')) {
    showView($grass)
  }
})



function show($view) {
  $view.setAttribute('class', 'view')
}

function hide($view) {
  $view.setAttribute('class', 'hidden')
}

window.addEventListener('hashchange', function(event) {
  if (event.target.location.hash.includes('fire')) {
    show($fire)
    hide($water)
    hide($grass)
  }
  else if (event.target.location.hash.includes('water')) {
    show($water)
    hide($fire)
    hide($grass)
  }
  else if (event.target.location.hash.includes('grass')) {
    show($grass)
    hide($fire)
    hide($water)
  }
}, false)
*/

window.addEventListener('hashchange', () => {
  const hash = window.location.hash.slice(1)
  this.match(hash)
})
