const express = require("express");
const app = express();
const logger = require("morgan");
const connectToMongoDB = require("./database/mongodb");
const PORT = 3000;
//ROUTER
const apiRouter = require("./routes/apiRouter");
const playerRouter = require("./routes/playerRouter");
const yahooRouter = require("./routes/yahooRouter");

app.use(logger("dev"));

app.use(express.urlencoded({ extended: false }));
app.use(express.json());

//ROUTE FOR ACCESSING BALLDONTLIE API
app.use("/api/stats", apiRouter);
//ROUTE FOR ACCESSING PLAYER ROUTE
app.use("/api/player", playerRouter);

//YAHOO ROUTER STUFF
app.use("/yahoo", yahooRouter);

app.listen(PORT, () => {
	console.log(`server running on port ${PORT}`);
	connectToMongoDB();
});
