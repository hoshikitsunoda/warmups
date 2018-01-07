// truncate function takes a string and optional object as argument and truncates the tail of string with "...".
// truncate function returns a truncated string.
//
// If input is 'hi-diddly-ho there, neighborino',
// then output will be 'hi-diddly-ho there, neighbo...'

function truncate(str, option) {
  // check if obj is passed
  if (option) {
    // set each properties as variables
    const { length, separator, omission } = option
    // check if option includes omission expression
    if (omission) {
      // if omission is there, replace tail of a string with omission string
      return str
        .substring(0, str.length - omission.length - 1)
        .concat(omission)
    }
    else if (separator === ' '){
      // if no omission, separate the string with separator and add '...'
      return str
        .split(separator)
        .join(' ')
        .substring(0, length - 3)
        .concat('...')
    }
    else {
      return str
        .split(separator)
        .join(', ')
        .substring(0, length - 3)
        .concat('...')
        console.log(str);
    }
  }
  else {
    return str
      .substring(0, str.length - 4)
      .concat('...')
  }
}

console.log(truncate('Cash rules everything around me, C.R.E.A.M. Get the money, dollar dollar bill, yall', {'length': 30}))
console.log(truncate('osu, ora goku, iccho yattemikka', {'length': 24, 'separator': ' '}))
console.log(truncate('osu, ora goku, iccho yattemikka', {'length': 24, 'separator': /,? +/}))
console.log(truncate('hi-diddly-ho there, neighborino', {'omission': ' [...]'}))

module.exports = truncate
