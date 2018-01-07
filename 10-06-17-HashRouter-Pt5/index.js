const path = require('path')
const express = require('express')
const pokedex = require('./pokedex')
// const { MongoClient } = require('mongodb')

const app = express()

app.use(express.static(path.join(__dirname, 'public')))

app.get('/api/pokedex', (req, res) => {
  const list = req.query.type
    ? pokedex.filter(pokemon => pokemon.type === req.query.type)
    : pokedex
  res.json(list)
  /*
  
  if (err) {
    console.error(err)
    res.sendStatus(500)
    process.exit(1)
  }
  const pokedex = db.collection('pokedex')
  pokedex
    .find({})
    .toArray()
    .then(list => res.json(list))
    .catch(err = {
      console.error(err)
      res.sendStatus(500)
  })
    .then(() => db.close())
  */
})

app.get('/api/pokedex/:number', (req, res) => {
  const pokemon = pokedex.find(pokemon => pokemon.number === req.params.number)
  if (!pokemon) return res.sendStatus(404)
  res.json(pokemon)
})

app.listen(3000, () => {
  console.log('Visit http://localhost:3000')
})
