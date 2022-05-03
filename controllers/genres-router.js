const router = require('express').Router()
const genresController = require('./genres-controller.js')

//get all movies in one genre
router.route('/genres/:genre').get(genresController.GetMovies)
//create new post under one genre
router.route('/genres/:genre/new').post(genresController.PostMovie)
//read/update/delete single post in genre
router.route('/genres/:genre/:id').get(genresController.GetMovies).delete(genresController.DeleteMovie).put(genresController.PostMovie)

module.exports = router