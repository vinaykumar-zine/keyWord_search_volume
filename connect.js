const mongoose = require("mongoose");

mongoose.set("strictQuery", true);

async function connectToMongoDB(url) {
  try {
    await mongoose.connect(url);
    console.log("Connected to MongoDB");
  } catch (error) {
    console.error("MongoDB connection error:", error);
    throw error; // Rethrow the error to propagate it
  }
}


module.exports = {connectToMongoDB}; // Export the function directly
