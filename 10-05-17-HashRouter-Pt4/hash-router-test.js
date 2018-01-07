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
    const hashParams = queryString.stringify(params)
  }
}
