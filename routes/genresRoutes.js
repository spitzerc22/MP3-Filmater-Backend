//DEPENDENCIES
const genres = require('express').Router()
const {getAllMovies, getMovie, createMovie, updateMovie, deleteMovie} = require('../controllers/genres-controller')

//READ ALL
genres.get('/:genre', getAllMovies)

//CREATE
genres.post('/:genre/new', createMovie)

//READ ONE, UPDATE AND DELETE
genres.route('/:genre/:id').get(getMovie).put(updateMovie).delete(deleteMovie)

module.exports = genres