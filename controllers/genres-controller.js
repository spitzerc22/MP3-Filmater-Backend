//preforming off of this data
const genreData = require('./genres-data')

//actions based on routes
class genresController {

    //CREATE - PostMovie
    static async PostMovie(req, res) {
        try{

        } catch(err) {
            console.log(err)
            res.status(404).send("Oops, something went wrong!")
        }
    }
    //READ  - GetMovies
    static async GetMovies(req, res) {
        try{

        } catch(err) {
            console.log(err)
            res.status(404).send("Oops, something went wrong!")
        }
    }
    //READ - GetMoviesId
    static async GetMoviesId(req, res) {
        try{

        } catch(err) {
            console.log(err)
            res.status(404).send("Oops, something went wrong!")
        }
    }
    //UPDATE - UpdateMovie
    static async UpdateMovie(req, res) {
        try{

        } catch(err) {
            console.log(err)
            res.status(404).send("Oops, something went wrong!")
        }
    }
    //DELETE -DeleteMovie
    static async DeleteMovie(req, res) {
        try{

        } catch(err) {
            console.log(err)
            res.status(404).send("Oops, something went wrong!")
        }
    }
}

module.exports = genresController