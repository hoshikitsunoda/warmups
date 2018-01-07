const queryString = {
  stringify: function(param) {
    const result = []
    for (const key in param) {
      result.push([key, param[key]])
    }
    const string =  result.map(result => result.join('=')).join('&')
    if (string) {
      return '?' + string
    } else {
      return string
    }
  }
}

//

const queryString = {
  stringify: params => {
    const pairs = []
    for (const key in params) {
      pairs.push([key, params[key]])
    }
    const string = pairs.map(function (pair) {
      return pair.join('=')
    }).join('&')
    if (string) {
      return '?' + string
    } else {
      return string
    }
  }
}


const queryString = {
  stringify: params => {
    const result = []
    for (const key in params) {
      result.push([key, params[key]])
    }
    const str = result.map(result => {
      return result.join('=')
    }).join('&')
    if (str) {
      return '?' + str
    } else {
    return str
    }
  }
}

const pets = [
  { name: 'fluffy', type: 'cat', age: 2 },
  { name: 'rover', type: 'dog', age: 4 },
  { name: 'morgan', type: 'parrot', age: 10 }
]

function renderPets(pets) {
  const petter = pets.map(pets => {
    const result = {}
    const {name, type, age} = pets
    const $pet = document.createElement('div')
    const $name = document.createElement('h1')
    const $type = document.createElement('h3')
    const $age = document.createElement('p')

    $name.textContent = name
    $type.textContent = type
    $age.textContent = age + 'yo'

    $pet.appendChild($name)
    $pet.appendChild($type)
    $pet.appendChild($age)

    return $pet
  })
  return petter
}

const petter = renderPets(pets)
petter.forEach($pet => document.body.appendChild($pet))

function proper(list) {
  return list.reduce((object, properties) => {
    const [key, value] = properties
    object[key] = value
    return object
  }, {})
}

const $button = document.createElement('button')
Object.assign($button.style, {
  width: '100px',
  height: '100px'
})
$button.textContent = 'click'

document.body.appendChild($button)

$button.addEventListener('click', () => {
  const {width, height} = $button.style
  Object.assign($button.style, {
    width: Math.sqrt(2) * width.replace('px', '') + 'px',
    height: Math.sqrt(2) * height.replace('px', '') + 'px'
  })
})
