const http = require("http");
const express = require("express");
const app = express()
const port = process.env.PORT || 8080;
const morgan = require("morgan");
const bodyParser = require("body-parser");
const cors = require('cors');
require('dotenv').config()
require("./src/utils/initDB")

app.use(cors());
app.use(morgan('dev'));
app.use(bodyParser.urlencoded({
    extended: false
}));
app.use(bodyParser.json());

// static files
app.use(express.static('public'))
app.use('/css', express.static(__dirname + 'public/css'))

// view engines
app.set('views', './src/views/partials')
app.set('view engine', 'ejs')

//routes
const indexRouter = require('./src/routes/index')
const createResumeRouter = require('./src/routes/createResume')
const getResumeRouter = require('./src/routes/getResume')
const aboutRouter = require('./src/routes/about')
const saveResumeRouter = require('./src/routes/resume')

app.use('/', indexRouter)
app.use('/createResume', createResumeRouter)
app.use('/getResume', getResumeRouter)
app.use('/about', aboutRouter)
app.use('/resumes', saveResumeRouter)

app.listen(port, console.log(`Server started at port ${port}\nBrowse website/server at http://localhost:${port}/`));