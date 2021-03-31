const express = require('express')
const getRouter = express.Router()

getRouter.get('', async(req, res) => {
    res.render('getResume')
})

module.exports = getRouter