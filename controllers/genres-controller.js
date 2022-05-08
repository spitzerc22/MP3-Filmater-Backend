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
        const title = req.body.title
        const genre = req.body.genre.toLowerCase()
        const pic = req.body.pic
        const releaseDate = req.body.releaseDate
        const description = req.body.description || ""

        db.Movie.create({
            title: title,
            genre: genre,
            pic: pic,
            releaseDate: releaseDate,
            description: description,
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
        const title = req.body.title
        const genre = req.body.genre.toLowerCase()
        const pic = req.body.pic
        const releaseDate = req.body.releaseDate
        const description = req.body.description || ""

        db.Movie.findByIdAndUpdate(req.params.id, {
            title: title,
            genre: genre,
            pic: pic,
            releaseDate: releaseDate,
            description: description
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