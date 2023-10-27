const Player = require("../models/playerModel");

async function fetchMyTeam(req, res) {
	try {
		let result = await Player.find({});

		res.json({
			message: "success",
			payload: result,
		});
	} catch (err) {
		console.log("error getting all players");
		res.json({
			message: "failure",
			payload: err,
		});
	}
}

async function createPlayer(req, res) {
	try {
		const { name } = req.body;

		await Player.create({
			Name: name,
		});

		// await newPlayer.save();
		res.json({
			message: "success",
			payload: name,
		});
	} catch (err) {
		res.json({
			message: "failure",
			payload: `create new player error: ${err}`,
		});
	}
}

module.exports = {
	fetchMyTeam,
	createPlayer,
};
