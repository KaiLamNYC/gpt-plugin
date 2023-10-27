const express = require("express");
const router = express.Router();

const { fetchMyTeam } = require("../controllers/playerController");

router.get("/fetchMyTeam", fetchMyTeam);

module.exports = router;
