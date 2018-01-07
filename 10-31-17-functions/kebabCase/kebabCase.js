function kebabCase(str) {
  const newStr = str.toLowerCase()
  return newStr
    .replace(/ /, '-')
    .replace(/_/g, '')
}

console.log(kebabCase('Foo Bar'));
console.log(kebabCase('__FOO_BAR__'));
