//DB CONNECTION
const mongoose = require('mongoose')
require('dotenv').config()

//db connection
mongoose.connect(
    process.env.MONGO_URI, {
        useNewUrlParser: true,
        useUnifiedTopology: true
    }, () => {console.log("Connected to DB")}
)


module.exports.Movie = require('./movies')
module.exports.Comment = require('./comments')
module.exports.User = require('./users')