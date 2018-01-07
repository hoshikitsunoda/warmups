function createElement(tagName, attributes, children) {
  const $el = document.createElement(tagName)
  for (const key in attributes) {
    $el.setAttribute(key, attributes[key])
  }

    for (let i = 0; i < children.length; i++) {
      const child = children[i]
      if (child instanceof Node) {
        $el.appendChild(child)
    }
    else {
        $el.appendChild(document.createTextNode(child))
    }
  }
  return $el
}

const $pikachu =
  createElement('div', { class: 'card', 'data-number': '025' }, [
    createElement('img', { class: 'card-img-top', src: 'https://goo.gl/GZPhnx', alt: 'Pikachu' }, []),
    createElement('div', { class: 'card-body' }, [
      createElement('h4', { class: 'card-title' }, ['Pikachu']),
      createElement('p', { class: 'card-text' }, [
        'Whenever Pikachu comes across something new, it blasts it with a jolt' +
        ' of electricity. If you come across a blackened berry, it\'s evidence' +
        ' that this Pokémon mistook the intensity of its charge.'
      ]),
      createElement('a', { href: '#', class: 'btn btn-primary' }, ['I choose you!'])
    ])
  ])

document.body.appendChild($pikachu)

function createElement(tagName, attributes, children) {
  const $el = document.createElement(tagName)
  for (var key in attributes) {
    $el.setAttribute(key, attributes[key])
  }
  for (let i = 0; i < children.length; i++) {
    if (children[i] instanceof Node) {
      $el.appendChild(children[i])
    } else {
      $el.appendChild(document.createTextNode(children[i]))
    }
  }
  return $el
}
