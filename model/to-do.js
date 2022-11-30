const mongoose = require("mongoose");

//creating schema..

const to_doSchema = new mongoose.Schema({
  date: {
    type: Date,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  category: {
    type: String,
    required: true,
  },
});

//now send the all data to the database collection..
const To_Do = mongoose.model("to-doDb", to_doSchema);

//export
module.exports = To_Do;
