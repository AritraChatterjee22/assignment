// const mongoose = require("mongoose");
const express = require("express");
const app = express();
const bodyParser = require("body-parser");
// const db ="mongodb+srv://Aritra:9kodwbBhvsn5oUzO@cluster0.bvl9m5g.mongodb.net/assignment?retryWrites=true&w=majority"
// mongoose.connect(db);
const routes = require("./routes");

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use("/api", routes);

const port = 8080;

app.listen(port, (err, res) => {
  if (err) console.log("Error while start server!!");
  else console.log(`Server started at port ${port}`);
});
