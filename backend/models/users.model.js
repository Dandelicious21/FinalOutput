const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const userSchema = new Schema({
	username: {
		type: String,
		unique: true,
		require: true,
		trim: true,
		minLength: 1
	},
	name: {
		type: String,
		require: true,
		trim: true,
		minLength: 1
	},
	password: {
		type: String,
		require: true,
		minLength:8
	},
}, {
	timestamps:true,
});

const User = mongoose.model('User',userSchema);

module.exports = User;