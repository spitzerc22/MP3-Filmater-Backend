const mongoose = require('mongoose')

const movieSchema = new mongoose.Schema({
    title:{type: String, required: true},
    genre:{type: String, required: true},
    pic:{type: String, default: ""},
    releaseDate: Number,
    description: String,
    createdBy: {type: String, required: true},
    hears: {type: Number, default: 0},
    // comment: [{type: mongoose.SchemaType, ref: 'Comment'}]
})

const Movie = mongoose.model('Movie', movieSchema)
module.exports = Movie