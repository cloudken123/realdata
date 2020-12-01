const mongoose = require('mongoose')

const signupSchema = new mongoose.Schema({
    username:{ type:String, unique:true},
    password: {type: String},
    confirmPassword: {type: String}
});

module.exports = mongoose.model('signup', signupSchema)