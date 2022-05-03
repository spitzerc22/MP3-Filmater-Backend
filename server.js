const express = require('express')
const { default: mongoose } = require('mongoose')
const app = express()
require('dotenv').config()

//db connection
mongoose.connect(
    process.env.MONGO_URI, {
        useNewUrlParser: true,
        useUnifiedTopology: true
    }, () => {console.log("Connected to DB")}
)

app.get('/', (req, res) => {
    res.send('This is filmater')
})

app.get('*', (req, res) => {
    res.send('Oops, something went wrong.')
})

app.listen(process.env.PORT, () => {console.log("Listening on PORT:", process.env.PORT)})