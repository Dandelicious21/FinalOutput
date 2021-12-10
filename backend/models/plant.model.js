const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const plantSchema = new Schema({
	userID: {
		type: String,
		trim: true,
		require: true
	},
	name: {
		type: String,
		require: true,
		trim: true,
		minLength: 1
	},
	species: {
		type: String,
		require: true,
		trim: true
	},
	//update this type soon ! thanks
	dateAcquired: {
		type: String,
		require: true,
		trim: true
	},
	description: {
		type: String,
		require: true,
		trim: true,
		maxLength: 150
	},
} , {
	timestamps: true,
});

const Plant = mongoose.model('Plant',plantSchema);

module.exports = Plant;