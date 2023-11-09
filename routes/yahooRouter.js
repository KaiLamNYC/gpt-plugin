const express = require("express");
const router = express.Router();

const {
	testFunction,
	handleAuthCallback,
} = require("../controllers/yahooController");

router.get("/test", testFunction);

router.get("/auth/callback", handleAuthCallback);

module.exports = router;
