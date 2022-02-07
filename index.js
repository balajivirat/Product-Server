const express = require("express");
const app = express();
const mongoose = require("mongoose");
const mainRoute = require("./api/routes/main.route");
const cors = require("cors");

app.use(express.json());
app.use(cors());
app.use("/eim", mainRoute);

app.get("/", (req, res) => {
  res.send("welcome to eim task");
});
// mongodb+srv://devaprakash:<password>@cluster0.qog3n.mongodb.net/test

const port = process.env.PORT || 3000;

mongoose.connect(
  'mongodb://localhost:27017',
  { useNewUrlParser: true, useUnifiedTopology: true },
  (err, success) => {
    err && console.log(err);
    console.log("connected");
  }
);
// mongoose.set("useFindAndModify", false);

app.listen(port, (err, success) => {
  err && console.log(err);
  console.log("server connected", port);
});
