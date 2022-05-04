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
    if(!req.body.title && !req.body.genre) {
        res.status(400).send('Please fill out the required fields.')
    } else {
        const movieTitle = req.body.title
        const movieGenre = req.body.genre.toLowerCase()
        const moviePic = req.body.pic
        const movieReleaseDate = req.body.releaseDate
        const movieDescription = req.body.description || ""

        db.Movie.create({
            title: movieTitle,
            genre: movieGenre,
            pic: moviePic,
            releaseDate: movieReleaseDate,
            description: movieDescription,
            // createdBy: " "
        })
        
        .then(() => {
            res.send("Success!")
        })
        .catch(err => {
            console.log(err)
            res.status(404).send("Oops, something went wrong!")
        })
    }
}

const updateMovie = (req, res) => {
        const movieTitle = req.body.title
        const movieGenre = req.body.genre.toLowerCase()
        const moviePic = req.body.pic
        const movieReleaseDate = req.body.releaseDate
        const movieDescription = req.body.description || ""

        db.Movie.findByIdAndUpdate(req.params.id, {
            title: movieTitle,
            genre: movieGenre,
            pic: moviePic,
            releaseDate: movieReleaseDate,
            description: movieDescription
        })

        .then(() => {
            res.send("Success!")
        })
        .catch(err => {
            console.log(err)
            res.status(404).send("Oops, something went wrong!")
        })
        
}

const deleteMovie = (req, res) => {
    db.Movie.findByIdAndDelete(req.params.id)
    .then(() => {
        res.send("Success!")
    })
    .catch(err => {
        console.log(err)
        res.status(404).send("Oops, something went wrong!")
    })
}
module.exports = {
    getAllMovies,
    getMovie,
    createMovie,
    updateMovie,
    deleteMovie
}