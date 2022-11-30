const express = require("express");
const port = 8000;
const path = require("path");

const app = express();
//*****  Config Db File.. */
const db = require("./config/mongoose");
const To_Do = require("./model/to-do");

//&**** view engine setup ??
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

//static file
app.use(express.static("assets"));
app.use(express.urlencoded());

//***   Routing .. */
app.get("/", (req, res) => {
  // return res.render("to_do", {
  //   title: "Your Today Tasks.",
  //   task_list: Tasks,
  // });
  /// now rendering from database..
  To_Do.find({}, function (err, taskList) {
    if (err) {
      console.log("Can't Fetch The data from database.");
      return;
    }
    return res.render("to_do", {
      title: "Your Today Tasks.",
      task_list: taskList,
    });
  });
});
// /all the from data
var Tasks = [
  {
    description: "Home Cleaning all Day. ",
    category: "Home",
    date: "08/09/2022",
  },
];

//submit task
app.post("/addTask", (req, res) => {
  console.log(req.body);
  // Tasks.push({
  //   description: req.body.description,
  //   category: req.body.category,
  //   date: req.body.date,
  // });

  //sending to database>>>
  To_Do.create(
    {
      description: req.body.description,
      category: req.body.category,
      date: req.body.date,
    },
    function (err, newTasks) {
      if (err) {
        console.log("Error in creating new data..");
        return;
      }
      console.log("****___ Send Data SuccessFully ___****", newTasks);
      return res.redirect("back");
    }
  );
});

///server listening ********///
app.listen(port, () => {
  console.log("Server Up And Running..!");
});
