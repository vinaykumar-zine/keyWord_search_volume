const mongoose = require("mongoose");

const keyWordSchema = new mongoose.Schema({
  keyWord: {
    type: String,
    required: true,
  },
  wordVolume: {
    type: Number,
    required: true,
  },
});

const URL = mongoose.model("myschema", keyWordSchema); // Model name "myschema"
module.exports = URL;
