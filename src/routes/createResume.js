const express = require('express')
const createRouter = express.Router()

createRouter.get('', async(req, res) => {
    res.status(200);
    res.render('createResume');
})

createRouter.get('/addSchool', async(req, res) => {
    res.sendFile("createResume.js", {root:(__dirname) + '../../../public/js/'})
})

module.exports = createRouter