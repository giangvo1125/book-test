var http = require('http')
var express = require('express')
var bodyParser = require('body-parser')
var cookieParser = require('cookie-parser')
var cors = require('cors');
let mongoose = require('mongoose')

var config = require('./config')

const app = express()

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))
app.use(cookieParser())
app.use(cors({origin: '*'}))

// Require our routes into the application.
require('./app/routes')(app)

mongoose.connect('mongodb://localhost/bookDB', { useNewUrlParser: true }).then(() => {
	console.log("Connected to Database")
}).catch((err) => {
    console.log("Not Connected to Database ERROR! ", err)
})

var db = mongoose.connection

app.set('port', config.port)

const server = http.createServer(app)
server.listen(config.port, config.domain, () => {
	console.log('Ready on port %d', server.address().port)
})
