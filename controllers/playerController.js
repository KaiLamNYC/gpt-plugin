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

module.exports = {
	fetchMyTeam,
};
