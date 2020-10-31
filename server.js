//Budget API

const express = require('express');
const app = express();
const port = 3000;
const url = "mongodb://localhost:27017/personal_budget";

const mongoose = require("mongoose")
const nameModel = require("./models/budget")  
const routes = require("./routes")
var bodyParser = require("body-parser");


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));


mongoose
  .connect(url, { useNewUrlParser: true, useUnifiedTopology: true,})
  .then(() => {
    console.log("Connected to Database");
    app.use(express.json())
    app.use("/api", routes)

    app.listen(port, () => {
      console.log(`API Serving at http://localhost:${port}`)
    });
  })
  .catch((err) => {
    console.log("Cannot connect to Database" + err);
  });

app.use("/", express.static("public"));


    