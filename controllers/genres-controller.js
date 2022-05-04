const db = require('../models/connect')

const getAllMovies = (req, res) => {
    if(req.params.genre === 'browseAll') {
        db.Movie.find()
        .then(foundedMovies => {
            res.send(foundedMovies)
        })
    } else if(req.params.genre){
        db.Movie.find({genre: req.params.genre})
        .then(foundedMovies => {
            res.send(foundedMovies)
        })
        
    } else {
        res.status(400).send("Oops, something went wrong!")
    }
}

const getMovie = (req, res) => {
    if(req.params.genre && req.params.id){
        db.Movie.find({genre: req.params.genre, _id: req.params.id})
        .then(foundedMovie => {
            res.send(foundedMovie)
        })
        
    }
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