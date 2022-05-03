const express = require('express')
const app = express()

app.get('/', (req, res) => {
    res.send('This is filmater')
})

app.get('*', (req, res) => {
    res.send('Oops, something went wrong.')
})

app.listen(4242)