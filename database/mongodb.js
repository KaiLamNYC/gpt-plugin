const mongoose = require("mongoose");

require("dotenv").config();

mongoose.set("strictQuery", false);

function connectToMongoDB() {
	mongoose
		.connect(process.env.MONGODB_URI)
		.then(() => {
			console.log("Connected to MongoDB");
		})
		.catch((err) => console.log(`DB connection failed: ${err}`));
}

//exporting the function
module.exports = connectToMongoDB;
