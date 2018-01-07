var person = {
  name: 'Ron',
  role: 'Mentor',
  powerLevel: 9000,
  favoriteColor: '#000'
}

function pick(model, keys) {
  var picked = {}
  for(var i = 0; i < keys.length; i++) {
    var key = keys[i]
    picked[key] = model[key]
  }
  return picked
}
