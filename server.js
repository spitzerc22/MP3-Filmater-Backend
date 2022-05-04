//DEPENDENCIES
const express = require('express')
const app = express()
require('dotenv').config()
const mongoose = require('mongoose')

//db connection
mongoose.connect(process.env.MONGO_URI, {useNewUrlParser: true, useUnifiedTopology: true}, () => {console.log('Connected to DB')})
//MIDDLEWARE

//ROUTES
app.use('/genres', require('./routes/genresRoutes'))
app.use('/login', require('./routes/authRoutes'))

app.get('/', (req, res) => {
    res.send('This is Filmater')
})

app.get('*', (req, res) => {
    res.send('Oops, something went wrong.')
})

app.listen(process.env.PORT, () => {console.log("Listening on PORT:", process.env.PORT)})