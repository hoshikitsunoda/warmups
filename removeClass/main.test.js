const removeClass = require('.')
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
      <title>removeClass</title>
    </head>
    <body>
      <div class="here are classes to remove">
        <div class="here are more classes to remove">
          <h1 class ="even more classes to remove"></h1>
        </div>
      </div>
      <script src="main.js"></script>
    </body>
  </html>
  `)

const { document } = window
global.document = document
global.window = window
const $div = document.querySelectorAll('div')

describe('Remove Classes', () => {
  it('removes target classes of all divs', () => {
    removeClass(['div', 'h1'], 'here', 'are', 'more')
    $div.forEach(element => {
      expect(element).not.to.have.class('here')
      expect(element).not.to.have.class('are')
      expect(element).not.to.have.class('more')
      expect(element).to.have.class('remove')
    })
  })
  it('removes target classes of h1', () => {
    removeClass('h1', 'even', 'more')
    $div.forEach(element => {
      expect(element).not.to.have.class('even')
      expect(element).not.to.have.class('more')
      expect(element).to.have.class('remove')
    })
  })
})
