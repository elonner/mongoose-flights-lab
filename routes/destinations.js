const destCtrl = require('../controllers/destinations');

var express = require('express');
var router = express.Router();

// POST /flights/:id
router.post('/flights/:id', destCtrl.create)

module.exports = router;