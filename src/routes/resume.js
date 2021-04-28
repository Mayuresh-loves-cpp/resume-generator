const express = require("express");
const router = express.Router();
const addResume = require("../controllers/addResume")

router.post('/add', addResume.addResume)

module.exports = router
