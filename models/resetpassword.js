const mongoose = require('mongoose')

const resetpasswordSchema = new mongoose.Schema({
    emailAddress:{ type:String, unique:true},
 
})

module.exports = mongoose.model('resetpassword', resetpasswordSchema)