/* global queryString */
/* eslint-disable no-unused-vars */

class HashRouter {
  constructor($views) {
    this.$views = Array.from($views)
    this.isListening = false
    this.handlers = {}
  }
  when(hash, handler) {
    this.handlers[hash] = handler
  }
  push(hash, params) {
    const newHash = hash + queryString.stringify(params)
    window.location.hash = newHash
  }
  match(fullHash) {
    const query = fullHash.slice(1)
    const params = queryString.parse(query)
    const handler = this.handlers[params]
    const $view = this.$views.find(params => {
      handler(params)
        .then(this.$views.forEach($view => {
          $view.getAttribute('id') === hash
            ? $view.classList.remove('hidden')
            : $view.classList.add('hidden')
        }))
    })
  }
  listen() {
    if (this.isListening) return
    window.addEventListener('hashchange', () => {
      const hash = window.location.hash.slice(1)
      this.match(hash)
    })
    window.dispatchEvent(new Event('hashchange'))
    this.isListening = true
  }
}
