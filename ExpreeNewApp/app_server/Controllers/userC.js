var userM = require('../Models/userM');
module.exports.userController = function (req, res, next) {
    res.render('userV');
  }
module.exports.userAdd = function(req, res){
    var data = {userName: req.body.Uname};
    var userMObj = new userM.userModel(data);
    userMObj.save(function(err, data){
        console.log(err);
        res.render('addUser',{msg: "Document is inserted"});
    });
    res.render('addUser',{msg: "Document Inserted"});
}
module.exports.userView = function(req, res){
    userM.userModel.find({}, function(err,list){
        res.render('viewUser',{userList: list});
    });    
}
module.exports.userUpdate = function(req, res){
    //implement the logic
}