const mongoose = require("mongoose");

require("dotenv").config();

//handling error in terminal
mongoose.set("strictQuery", false);

//connecting to mongodb
function connectToMongoDB() {
	mongoose
		.connect(process.env.MONGODB_URI)
		.then(() => {
			//handling the promise
			console.log("Connected to MongoDB");
		})
		.catch((err) => console.log(`DB connection failed: ${err}`));
}

//exporting the function
module.exports = connectToMongoDB;
