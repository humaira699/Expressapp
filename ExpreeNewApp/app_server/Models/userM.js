var mongoose = require('Mongoose');
mongoose.connect('mongodb://localhost/CoftTech');

var userSchema = mongoose.Schema({
    userName:{type: String, required: true}
    // password:{type: String, required: true},
    // email:{type: String, required: true, index: true}    
});

module.exports.userModel = mongoose.model('userModel',userSchema,'UsersT');
// module.exports.userModel = userModel
