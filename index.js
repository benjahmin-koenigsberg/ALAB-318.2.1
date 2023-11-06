const express = require('express')
const path = require('path')

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




//start server
app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})
