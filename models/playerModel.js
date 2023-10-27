const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const playerSchema = new mongoose.Schema({
	Name: {
		type: String,
		required: true,
		unique: true,
	},
	Id: {
		type: String,
		required: false,
		unique: true,
	},
	FantasyTeam: {
		type: String,
		required: false,
	},
});

const Player = mongoose.model("Player", playerSchema);

module.exports = Player;
