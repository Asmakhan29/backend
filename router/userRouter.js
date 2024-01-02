const express = require('express');
const Model = require('../model/usermodel');

const router = express.Router();

router.get('/add', (req, res) => {
    res.send('Add response from user Router');
});

// getall
// getbyid
// update
// delete

module.exports = router;