/* eslint-disable no-unused-vars */
var $time = document.querySelector('#time')
var $start = document.querySelector('#start')
var $stop = document.querySelector('#stop')
var $reset = document.querySelector('#reset')
var $limit = document.querySelector('#limit')
var $set = document.querySelector('#set')

var timer = {
  seconds: 0,
  id: null,
  limit: $limit.value
}

function start() {
  if(timer.id === null){
    timer.id = setInterval(function () {
      timer.seconds++
      render()
      limit(event)
    }, 1000)
  }
}

function stop() {
  clearInterval(timer.id)
}

function render() {
  $time.textContent = timer.seconds
}

function reset() {
  timer.seconds = 0
  $time.textContent = timer.seconds
}

function limit(event) {
  if(timer.seconds === $limit.value){
    clearInterval(timer.id)
  }
}

$start.addEventListener('click', start)

$stop.addEventListener('click', stop)

$reset.addEventListener('click', reset)

$set.addEventListener('click', limit)
