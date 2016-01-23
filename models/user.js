var mongoose = require('mongoose');
var addressSchema = require('./address');

var userSchema = mongoose.Schema({
    username: {type: String, required: true, minlength: 5, maxlength: 20},
    email: {type: String, required: true},
    address: addressSchema,
})

// export the model
module.exports = mongoose.model('User', userSchema);