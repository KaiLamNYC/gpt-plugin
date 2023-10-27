const axios = require("axios");

async function getPlayerStats(req, res) {
	try {
		const queryParams = {
			dates: req.body.dates || [],
			seasons: req.body.seasons || [],
			player_ids: req.body.player_ids || [],
			game_ids: req.body.game_ids || [],
			postseason: req.body.postseason || false,
			start_date: req.body.start_date || "",
			end_date: req.body.end_date || "",
		};

		// Make an HTTP POST request to the API with the query parameters
		const result = await axios.get("https://www.balldontlie.io/api/v1/stats", {
			params: queryParams,
		});

		res.json({
			message: "success",
			payload: result.data,
		});
	} catch (e) {
		res.json({
			message: "failure to query player stats",
			payload: e,
		});
	}
}
// https://www.balldontlie.io/api/v1/stats?start_date=2023-10-26&end_date=2023-10-26&player_ids[]=15&player_ids[]=278

//SIMPLE FUNCTION TO SEARCH FOR PLAYER
async function searchPlayer(req, res) {
	try {
		const result = await axios.get(
			`https://www.balldontlie.io/api/v1/players?search=${req.params.name}`
		);

		res.json({
			message: "success",
			payload: result.data,
		});
	} catch (e) {
		res.json({
			message: "failure to search for player",
			payload: `fail ${e}`,
		});
	}
}

module.exports = {
	searchPlayer,
	getPlayerStats,
};
