// index.js
const express = require("express");
const path = require("path");
// const mongoose = require("mongoose");
// const ejs = require("ejs");
const keywordRoutes = require("./routes/keywordRoutes");
const { connectToMongoDB } = require("./connect");

const app = express();
const PORT = 8000;

connectToMongoDB("mongodb://127.0.0.1:27017/volumeDb")
  .then(() => console.log("all set"))
  .catch((err) => console.log("Mongo err", err));

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
// app.set("view engine", ejs);
// app.set("views", path.resolve("./views"));

// Serve HTML page
app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "views", "index.html"));
});

// Use keyword routes
app.use("/keywords", keywordRoutes);

app.listen(PORT, () => console.log(`Server started at Port ${PORT}`));
