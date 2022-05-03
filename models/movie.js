const mongoose = require('mongoose')

const movieSchema = new mongoose.Schema({
    title:{type: String, required: true},
    genre:{type: String, required: true},
    releaseDate: Number,
    description: String,
    createdBy: {type: String, required: true},
    hears: {type: Number, default: 0},
    comment: [{type: mongoose.SchemaType.Types.ObjectId, ref: 'Comment'}]
})

module.exports = mongoose.model('Movie', movieSchema)