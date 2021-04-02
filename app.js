const http = require("http");
const express = require("express");
const app = express()
const port = process.env.PORT || 3000;

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

app.use('/', indexRouter)
app.use('/createResume', createResumeRouter)
app.use('/getResume', getResumeRouter)
app.use('/about', aboutRouter)

app.listen(port,console.log(`Server started at port ${port}\nBrowse at http://localhost:${port}/`));
