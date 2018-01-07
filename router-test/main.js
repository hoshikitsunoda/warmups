window.onload = function() {
  console.log('DOM has loaded')

  var Router = function(name, routes) {
    return {
      name: name,
      routes: routes
    }
  }
  var myFirstRouter = new Router('myFirstRouter', [
    {
      path: '/',
      name: 'Root'
    },
    {
      path: '/about',
      name: 'About'
    },
    {
      path: '/contact',
      name: 'Contact'
    }
  ])
  var currentPath = window.location.pathname
  console.log(currentPath)
}
