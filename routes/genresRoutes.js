const Movie = require('../models/movies')
const Comment = require('../models/comments')
const genres = require('express').Router()
const {getAllMovies, getMovie, createMovie, updateMovie, deleteMovie} = require('../controllers/genres-controller')

//READ ALL
genres.get('/:genre', getAllMovies)

//READ ONE
genres.get('/:genre/:id', getMovie)

//CREATE
genres.post('/:genre/new', createMovie)

//UPDATE
genres.put('/:genre/:id', updateMovie)

//DELETE
genres.delete('/:genre/:id', deleteMovie)

module.exports = genres