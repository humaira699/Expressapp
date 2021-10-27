var express = require('express');
var userC = require('../Controllers/userC');
var router = express.Router();

/* GET users listing. */
router.get('/', userC.userController);
router.get('/addUser', function(req, res){
  res.render('addUser');
});
router.post('/addData', userC.userAdd);
router.get('/viewUser', userC.userView);
router.get('/updateUser', function(req, res){
  res.render('updateUser');
});
router.post('/updateData', userC.userUpdate);
module.exports = router;
