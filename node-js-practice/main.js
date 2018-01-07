/*

// BABY STEPS

let num = 0

for(let i = 2; i < process.argv.length; i++) {
  num += Number(process.argv[i])
}

console.log(num)

// MY FIRST I/O

var fs = require('fs')

var content = fs.readFileSync(process.argv[2])

var line = content.toString().split('\n').length - 1
console.log(line)

// MY FIRST ASYNC I/O

var fs = require('fs')

var content = process.argv[2]

fs.readFile(content, function callback(err, data) {
  var line = data.toString().split('\n').length - 1
  console.log(line)
})

// Official solution

var fs = require('fs')
var file = process.argv[2]

fs.readFile(file, function (err, contents) {
  if (err) {
    return console.log(err)
  }
  // fs.readFile(file, 'utf8', callback) can also be used
  var lines = contents.toString().split('\n').length - 1
  console.log(lines)
})

*/

// FILTER LS

var fs = require('fs')
var path = require('path')
var folder = process.argv[2]
var ext = '.' + process.argv[3]

fs.readdir(folder, function(err, files) {
  if (err) {
    return console.log(err)
  }
  files.forEach(function(file) {
    if (path.extname(file) === ext) {
      console.log(file)
    }
  })
})

// Official solution

var fs = require('fs')
var path = require('path')

var folder = process.argv[2]
var ext = '.' + process.argv[3]

fs.readdir(folder, function (err, files) {
  if (err) return console.error(err)
  files.forEach(function (file) {
    if (path.extname(file) === ext) {
      console.log(file)
    }
  })
})
