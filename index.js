const express = require("express");
const app = express();
const logger = require("morgan");
const connectToMongoDB = require("./database/mongodb");
const PORT = 3000;
//ROUTER
const apiRouter = require("./routes/apiRouter");
// const playerRouter = require("./routes/playerRouter");

app.use(logger("dev"));

app.use(express.urlencoded({ extended: false }));
app.use(express.json());

//ROUTE FOR ACCESSING BALLDONTLIE API
app.use("/api", apiRouter);
//ROUTE FOR ACCESSING PLAYER ROUTE
// app.use("/player", playerRouter);

app.listen(PORT, () => {
	console.log(`server running on port ${PORT}`);
	connectToMongoDB();
});

//NEED TO CREATE ROUTE FOR RETREIVING "MY TEAM"
//NEED TO BE ABLE TO UPDATE PLAYERS ID
//NEED TO CREATE NEW PLAYERS LATER FOR ALL THE FANTASY TEAMS
//NEED TO CREATE THE REST OF THE STAT ENDPOINTS FROM BALLDONTLIE
//OTHER MODELS?
