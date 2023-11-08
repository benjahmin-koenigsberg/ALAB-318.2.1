const express = require('express')
const path = require('path')
const users = require('./users.js')
const logger = require("./middlewear/logger.js")
//const moment = require('moment');

//port
const port = process.env.PORT || 5000


//init app
const app = express();


//init middlewear

// app.use(logger)

//pug view engine

// app.set('views', path.join( __dirname, 'views'))
// app.set('view engine', 'pug');

//home route
app.get('/', (req, res) => {
    res.render('index')
})

//about route
app.get('/about', (req, res) => {
    res.render('about')
})

//contact route
app.get('/contact', (req, res) => {
    res.render('contact.pug')
})

app.post('/contact', (req, res) => {
    res.send('Post request successfully recieved')
})



 //app.use(express.static(path.join(__dirname, 'views')));
 app.use(express.static(path.join(__dirname, 'public')))


//image

 app.get('/image', ( req, res) => {
    res.sendFile(path.join(__dirname, './public/image.jpeg'))
})


//users from json placeholser

app.get('/api/users', (req, res) => {
    res.json(users)
})

//get single user
app.get('/api/users/:id', (req, res)=>{
    res.send(req.params.id)
})



//start server
app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})
