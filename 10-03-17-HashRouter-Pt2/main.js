/*
class HashRouter {
  constructor($view) {
    this.$views = $views
    this.isListening = false
  }
  match(hash) {
    this.$views.forEach(view => {
      if (views.getAttribute('id') === hash) {
        this.$views[i].classList.remove('hidden')
      }
      else {
        this.$views[i].sclassList.add('hidden')
      }
    })
  }
  static listen() {
    if (!this.isListening) {
      window.addEventListener('hashchange', function() {
        this.isListening = true
        this.match(window.location.hash)
      })
    }
  }
}

HashRouter.listen('fire', 'water', 'grass')

//solution

class HashRouter {
  constructor($views) {
    this.$views = $views
    this.isListening = false
  }

  match(hash) {

    this.$views.forEach(view => {
      if (view.getAttribute('id') === hash.slice(1)) {
        view.classList.remove('hidden')
      } else {
        view.classList.add('hidden')
      }
    })

  }

  listen() {

    if (!this.isListening) {
      window.addEventListener('hashchange', () => {
        //this binding is event(HashRouter in this case) itself.
        this.isListening = true
        this.match(window.location.hash)
      })
    }

  }
}

const $views = document.querySelectorAll('.view')
// querySelectorAll is static library and all get~ are live library
const myRouter = new HashRouter($views)
myRouter.listen()

*/

class HashRouter {
  constructor($views) {
    this.$views = $views
    this.isListening = false
  }

  match(hash) {
    this.$views.forEach(view => {
      if (view.getAttribute('id') === hash.slice(1)) {
        view.classList.remove('hidden')
      } else {
        view.classList.add('hidden')
      }
    })
  }

  listen() {
    window.addEventListener('hashchange', () => {
      this.match(window.location.hash)
    })
  }
}

const $view = document.querySelectorAll('.view')
const router = new HashRouter($view)
router.listen()
