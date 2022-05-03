const mongoose = require('mongoose')

const commentSchema = new mongoose.Schema({
    writer: {type: String, required: true},
    hearts: {type: Number, required: true},
    content: {type: String, default: ""}
})

module.exports = mongoose.model('Comment', commentSchema)