var $pokedex = document.querySelector('#pokedex')

$pokedex.addEventListener('click', function(event) {
  var data = event.target.getAttribute('data-number')
  console.log(data)
})
