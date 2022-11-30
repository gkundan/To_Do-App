const mongoose = require("mongoose");

//connect to db.
mongoose.connect("mongodb://127.0.0.1:27017/to-doDb").then(() => {
  console.log("Connected to Database!!");
});

const db = mongoose.connection;
db.on("error", console.error.bind(console, "Error Connecting Db.!"));
db.once("open", function () {
  console.log("SuccessFully Connected to Database.!!");
});
