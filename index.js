const express = require('express')
const path = require('path')
const users = require('./users.js')
const logger = require("./middlewear/logger.js")
var exphbs = require('express-handlebars');
//const moment = require('moment');

//port
const port = process.env.PORT || 5000


//init app
const app = express();

//handlebars middlewar
var hbs = exphbs.create({});

// Register `hbs.engine` with the Express app.
app.engine('handlebars', hbs.engine);
app.set('view engine', 'handlebars');
//app.set('views', './views');

//home bapge handlebars route
app.get('/', (req, res) => {
    res.render('index', {
        title: 'Users App',
        users
    })
})

//init middlewear

//1 app.use(logger)


//2  app.use((req, res)=>{
//     console.log(req)
// })

//body parser middle ware
app.use(express.json())
app.use(express.urlencoded({ extended: false }))

//pug view engine

// app.set('views', path.join( __dirname, 'views'))
// app.set('view engine', 'pug');

//pug home route

app.get('/', (req, res) => {
    res.render('index')
})

//pug about route

app.get('/about', (req, res) => {
    res.render('about')
})

//pug contact route

app.get('/contact', (req, res) => {
    res.render('contact.pug')
})



//app.use(express.static(path.join(__dirname, 'views')));
app.use(express.static(path.join(__dirname, 'public')))


//image
app.get('/image', (req, res) => {
    res.sendFile(path.join(__dirname, './public/image.jpeg'))
})

//download
app.get('/download', (req, res) => {
    res.download('./public/End-Seciesism.jpeg');
});


//members api routes
app.use('/api/users', require('./routes/users'));

//start server
app.listen(port, () => {
    console.log(`Example app listening on port ${port}  🚀`)
})
