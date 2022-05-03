const mongoose = require('mongoose')

//db connection
mongoose.connect(
    process.env.MONGO_URI, {
        useNewUrlParser: true,
        useUnifiedTopology: true
    }, () => {console.log("Connected to DB")}
)

module.exports.Moves = require('./movie.js')
