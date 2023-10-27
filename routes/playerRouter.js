const express = require("express");
const router = express.Router();

const {
	fetchMyTeam,
	createPlayer,
} = require("../controllers/playerController");

router.get("/fetchMyTeam", fetchMyTeam);

router.post("/createPlayer", createPlayer);

module.exports = router;
