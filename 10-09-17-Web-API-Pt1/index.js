const express = require('express')
const { MongoClient } = require('mongodb')

MongoClient.connect('mongodb://localhost/pokemon', (err, db) => {
  if (err) {
    console.error(err)
    process.exit(1)
  }

  const app = express()
  const pokedex = db.collection('pokedex')

  app.get('/api/pokedex', (req, res) => {
    pokedex
      .find({})
      .toArray()
      .then(pokemon => res.json(pokemon))
      .catch(err => {
        console.error(err)
        res.sendStatus(500)
      })
  })
  app.get('/api/pokedex/:number', (req, res) => {
    pokedex
      .findOne({ number: req.params.number })
      .then(pokemon => {
        pokemon
          ? res.json(pokemon)
          : res.sendStatus(404)
      })
      .catch(err => {
        console.error(err)
        res.sendStatus(500)
      })
  })
  app.listen(3000, () => console.log('Test at http://localhost:3000'))
})
