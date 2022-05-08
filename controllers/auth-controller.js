const db = require('../models/connect')

//POST:SUBMIT LOGIN
//needs to be more strict, will come back to later
const submitLogin = (req, res) => {
    const user = db.User.find(
        {
            username: req.body.username, 
            password: req.body.password
        })
    if(user) {
        console.log(user._conditions.username)
        res.send('success')
    } else {
        
        res.send('error')
    }
    
}

//what if someone makes account with taken username?
const submitRegister = (req, res) => {
    const username = req.body.username
    let password 
    
    if(req.body.password1 === req.body.password2){
        password = req.body.password1
    } else {
        res.send("Passwords do not match, please try again.")
    }

    db.User.create({
        username: username,
        password: password
    })
    .then(() => {
        console.log("Success!")
        res.send("Success! Start adding your favorite movies!")
    })
    .catch(err => {
        console.log(err)
        res.status(404).send("Oops, something went wrong.")
    })
}

module.exports = {
    submitLogin,
    submitRegister
}