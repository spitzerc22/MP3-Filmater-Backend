const router = require('express').Router()
const genresController = require('./genres-controller.js')

router.route('/:genre').get(genresController.GetMovies)
router.route('/:genre/:id').get(genresController.GetMovieId).put(genresController.UpdateMovie).delete(genresController.DeleteMovie)
router.route('/:genre/new').post(genresController.PostMovie)



module.exports = router