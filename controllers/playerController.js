const Player = require("../models/playerModel");

async function fetchMyTeam(req, res) {
	try {
		const result = await Player.find({});

		if (!result) {
			return res.status(404).json({
				message: "No players found",
				payload: [],
			});
		}

		res.status(200).json({
			message: "Success",
			payload: result,
		});
	} catch (err) {
		console.error("Error getting all players:", err);
		res.status(500).json({
			message: "Failure",
			payload: `Failure to return all players: ${err}`,
		});
	}
}

async function createPlayer(req, res) {
	try {
		const { name } = req.body;

		await Player.create({
			Name: name,
		});

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
