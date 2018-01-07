const removeParent = require('./main.js')
const jsdom = require('jsdom')
const chai = require('chai')
const { expect } = chai
chai.use(require('chai-dom'))

const { JSDOM } = jsdom
const { window } = new JSDOM(`
  <!DOCTYPE html>
  <html>
    <head>
      <meta charset="utf-8">
      <title>Unwrap</title>
    </head>
    <body>
      <h1>H1 here
        <h2>H2 here
          <ul>list
            <li>list element</li>
          </ul>
        </h2>
      </h1>
    </body>
  </html>
  `)

const { document } = window
global.document = document
global.window = window

describe('Remove Parent', () => {
  const $h1 = document.querySelector('h1')
  const $h2 = document.querySelector('h2')
  const $ul = document.querySelector('ul')
  const $li = document.querySelector('li')
  it('removes parent of h2 element', () => {
    expect(removeParent($h2)).not.contain($h1)
  })
})
