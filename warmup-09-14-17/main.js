var $pokedex = document.querySelector('#pokedex')

$pokedex.addEventListener('click', function(event) {
  var $card = event.target.closest('.card')
  if($card !== null) {
    var number = $card.getAttribute('data-number')
    console.log(number)
  }
})
