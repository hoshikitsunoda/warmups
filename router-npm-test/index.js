var finalhandler = require('finalhandler')
var http         = require('http')
var Router       = require('router')

var router = Router()
router.get('/', function (req, res) {
  res.setHeader('Content-Type', 'text/plain; charset=utf-8')
  res.end('Hello World!')
})

router.get('/test', function (req, res) {
  res.setHeader('Content-Type', 'text/plain; charset=utf-8')
  res.end('test!')
})

router.get('/intro', function (req, res) {
  res.setHeader('Content-Type', 'text/plain; charset=utf-8')
  res.end('Osu!')
})

var server = http.createServer(function(req, res) {
  router(req, res, finalhandler(req, res))
})

server.listen(3000)
