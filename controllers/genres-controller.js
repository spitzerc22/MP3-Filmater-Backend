
const Movie = require('../models/movies')
const Comment = require('../models/comments')
const genres = require('express').Router()

//READ ALL
genres.get('/:genre', (req, res) => {
    //not really connected to db?
    Movie.find()
    .then(movie => {
        if(movie.genre === req.params.genre){
            console.log(movie)
            res.render(movie)
        } 
    })
    .catch(err => {
        console.log(err)
    })
    
    res.send(`this is the ${req.params.genre} page`)
})

//READ ONE
genres.get('/:genre/:id', (req ,res) => {
    const genre = req.params.genre
    const id = req.params.id
    // Movie.findById(id)
    //  .then(foundMovie => {
    //      res.send(foundMovie.title)
    //  })
    res.send(`this is ${id} in ${genre}`)
})

//CREATE
genres.post('/:genre/new', (req, res) => {
    res.send(`this is the new page for ${req.params.genre}`)
})

//UPDATE
genres.put('/:genre/:id', (req, res) => {
    res.send(`this is the update page for ${req.params.id} for ${req.params.genre}`)
})

//DELETE
genres.delete('/:genre/:id', (req, res) => {
    res.send(`you're going to delete ${req.params.id} from ${req.params.genre}`)
})

module.exports = genres