const express = require('express')
const createRouter = express.Router()

createRouter.get('', async(req, res) => {
    res.render('createResume')
})

module.exports = createRouter