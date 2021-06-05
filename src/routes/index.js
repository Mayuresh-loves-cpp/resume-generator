const express = require('express')
const indexRouter = express.Router()

indexRouter.get('', async(req, res) => {
    res.render('index')
})

indexRouter.get('/indexjs', async(req, res) => {
    res.sendFile("index.js", {root:(__dirname) + '../../../public/js/'})
})

module.exports = indexRouter