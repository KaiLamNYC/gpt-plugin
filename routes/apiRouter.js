const express = require("express");
const router = express.Router();

const {
	searchPlayer,
	getPlayerStats,
} = require("../controllers/apiController");

router.get("/searchPlayer/:name", searchPlayer);

router.post("/getPlayerStats", getPlayerStats);

module.exports = router;
