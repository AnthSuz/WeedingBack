const express = require("express");
const mongoose = require("mongoose");
const formidableMiddleware = require("express-formidable");
const cors = require("cors");

const app = express();
app.use(formidableMiddleware());
app.use(cors());

mongoose.connect("mongodb://localhost/weeding-guest", {
  useNewUrlParser: true,
  useUnifiedTopology: true
});

// MODEL
require("./models/models_guest");
require("./models/models_children");

// ROADS
const roadsGuest = require("./roads/roads_guest");
app.use(roadsGuest);

const roadsChildren = require("./roads/roads_children");
app.use(roadsChildren);
// STARTED SERVER

app.listen(3010, () => {
  console.log("Server started");
});
