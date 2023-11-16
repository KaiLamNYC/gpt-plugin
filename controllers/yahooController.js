const connectToMongoDB = require("../database/mongodb");
const axios = require("axios");
require("dotenv").config();

async function testFunction(req, res) {
	try {
		return res.status(200).json({
			message: "hello world",
		});
	} catch (err) {
		return res.status(500).json({
			message: "error",
			payload: `error: ${err.message}`,
		});
	}
}

async function handleAuthCallback(req, res) {
	const { code } = req.query;

	if (!code) {
		return res.status(400).send("Authorization code is missing.");
	}

	try {
		const authString = Buffer.from(
			`${process.env.YAHOO_CLIENT_ID}:${process.env.YAHOO_CLIENT_SECRET}`
		).toString("base64");
		const response = await axios({
			method: "post",
			url: "https://api.login.yahoo.com/oauth2/get_token",
			headers: {
				"Content-Type": "application/x-www-form-urlencoded",
				Authorization: `Basic ${authString}`,
			},
			data: new URLSearchParams({
				redirect_uri: process.env.YAHOO_REDIRECT_URI,
				code,
				grant_type: "authorization_code",
			}).toString(),
		});

		const { access_token, refresh_token } = response.data;

		// Handle the received tokens here: store them, create a session, etc.

		console.log("Access Token:", access_token);
		console.log("Refresh Token:", refresh_token);

		res.send("Tokens received and stored.");
	} catch (error) {
		console.error("Error exchanging authorization code for tokens:", error);
		res.status(500).send("An error occurred.");
	}
}
module.exports = {
	testFunction,
	handleAuthCallback,
};
