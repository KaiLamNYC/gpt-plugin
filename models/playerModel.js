const mongoose = require("mongoose");

// const Schema = mongoose.Schema;

const playerSchema = new mongoose.Schema({
	Name: {
		type: String,
		required: true,
		unique: false,
	},
	Id: {
		type: String,
		required: false,
		unique: false,
	},
	FantasyTeam: {
		type: String,
		required: false,
		unique: false,
	},
});

const Player = mongoose.model("Player", playerSchema);

module.exports = Player;
