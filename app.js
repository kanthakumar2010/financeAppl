const express = require('express')
const path = require('path')
const bodyParser = require('body-parser')
const cors = require('cors')
const passport = require('passport')
const mongoose = require('mongoose')
const config = require('./config/database')
const chalk = require('chalk')
// const pug = require('pug')

//  mongose connection string
mongoose.connect(config.database)
// database connection sucessfull
mongoose.connection.on('connected', () => {
     console.log(chalk.bgGreen.black('Connected to Database') + chalk.green(config.database) )
    })
// // database connection failed error
mongoose.connection.on('error', (err) => {
     console.log(chalk.bgRed('Database connection error') + err)
})

const app = express();

//Add routes file
const customerRoute = require('./routes/customer')

//port number
const port = process.env.PORT || 3000

//cors middleware
// app.use(cors());
//Set static Folder
app.use(express.static(path.join(__dirname, 'public')))

// Load View Engine
// app.set('views', path.join(__dirname, 'views'));
// app.set('view engine', 'pug');

//body parser middleware
app.use(bodyParser.json())
//Passport MiddleWare
app.use(passport.initialize())
app.use(passport.session())


//router definition should go inside here
app.use('/customer', customerRoute)

//Get For Testing..
app.get('/', (req, res)=>{
    res.send('its working')
})
//start node server`
app.listen(port, () => {
    console.log('Server Started on port ' + port)
})