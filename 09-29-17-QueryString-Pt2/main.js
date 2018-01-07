/*
const queryString = {
  parse: query => {
    const object = {}
    const splitted = query.split(/[\s,]+/)
    for (var i = 0; i < splitted.length; i++) {
      const pair = splitted[i].split('=')

      object[pair[0]] = pair[1]
    }
    return object
  }
}
*/

const queryString = {
  parse: function(query) {
    if (query === '' || query === '?') {
      return {}
    }
    const sliced = query.slice(1)
    const keyValStrings = sliced.split('&')
    const pairs = []
    keyValStrings.forEach(keyVal => {
      const splitPair = keyVal.split('=')
      pairs.push(splitPair)
    })
    const params = {}
    pairs.forEach(pair => {
      params[pair[0]] = pair[1]
    })
    return params
  }
}

const queryString = {
  parse(query) {
    return query
      .replace(/^\?/, '')
      .split('&')
      .map(param => param.split('='))
      .reduce((params, [key, value]) =>
        key ? Object.assign(params, { [key]: value }) : params
      , {})
  }
}
