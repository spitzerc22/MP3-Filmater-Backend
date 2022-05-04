const db = require('../models/connect')

const getAllMovies = (req, res) => {
    db.Movie.find()
    .then(movie => {
        res.json({movie})
    })
    .catch(err => {
        console.log(err)
    })
    res.send(`this is the ${req.params.genre} list`)
}

const getMovie = (req, res) => {
    res.send(`this is the ${req.params.id} movie`)
}

const createMovie = (req, res) => {
    if(!req.body.title) {
        res.status(400).send('Oops someting went wrong.')
    } else {
    res.send(`this is the new page for ${req.params.genre}`)
    }
}

const updateMovie = (req, res) => {
    res.send(`this is the update page for ${req.params.id} for ${req.params.genre}`)
}

const deleteMovie = (req, res) => {
    res.send(`you're going to delete ${req.params.id} from ${req.params.genre}`)
}
module.exports = {
    getAllMovies,
    getMovie,
    createMovie,
    updateMovie,
    deleteMovie
}