const express = require("express");
const router = express.Router();

const {
	searchPlayer,
	getPlayerStats,
} = require("../controllers/apiController");

//localhost:3000/api/searchPlayer/name
router.get("/searchPlayer/:name", searchPlayer);

router.post("/getPlayerStats", getPlayerStats);

module.exports = router;
