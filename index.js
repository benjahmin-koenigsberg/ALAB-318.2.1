const express = require('express')
const path = require('path')
const users = require('./users.js')


//port
const port = process.env.PORT || 3000


//init app
const app = express();

//pug view engine
app.set('views', path.join(__dirname, 'views'))
app.set('view engine', 'pug');

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
    res.render('contact')
})

app.post('/contact', (req, res) => {
    res.send('Post request successfully recieved')
})



// app.use(express.static(path.join(__dirname, 'public')))
app.use(express.static(path.join(__dirname)))


//image
app.get('/image', ( req, res) => {
    res.sendFile(path.join(__dirname, './public/image.jpeg'))
})


//users from json placeholser
app.get('/api/users', (req, res) => {
    res.json(users)
})


//start server
app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})
