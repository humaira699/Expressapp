var express = require('express');
var prodC = require('../Controllers/productsC');
var router = express.Router();

/* GET users listing. */
router.get('/', prodC.productC);

module.exports = router;
