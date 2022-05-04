const mongoose = require('mongoose')

const movieSchema = new mongoose.Schema({
    title:{type: String, required: true},
    genre:{type: String, required: true},
    pic:{type: String, default: "https://placekitten.com/200/300"},
    releaseDate: Number,
    description: String,
    createdBy: {type: String, required: true},
    hearts: {type: Number, setValue: 0},
    // comment: [{type: mongoose.SchemaType, ref: 'Comment'}]
})

const Movie = mongoose.model('Movie', movieSchema)
module.exports = Movie