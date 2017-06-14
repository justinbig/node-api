
var mongoose = require('mongoose');
var Users = mongoose.model('Users',{
	email : {
		type: String,
		minlength: 1,
		trim: true,
		required: true
	}
});

module.exports = {Users};