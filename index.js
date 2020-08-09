const express = require("express");
const mongoose = require("mongoose");
const formidableMiddleware = require("express-formidable");
const cors = require("cors");
require("dotenv").config();

const app = express();
app.use(formidableMiddleware());
app.use(cors());

mongoose.connect("mongodb://localhost/weeding-guest", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

// MODEL
require("./models/models_guest");
require("./models/models_children");
require("./models/models_user");

// ROADS
const roadsGuest = require("./roads/roads_guest");
app.use(roadsGuest);

const roadsChildren = require("./roads/roads_children");
app.use(roadsChildren);

const roadsSignUp = require("./roads/roads_signup");
app.use(roadsSignUp);

const roadsLogin = require("./roads/roads_login");
app.use(roadsLogin);

const roadsOnoff = require("./roads/roads_onoff");
app.use(roadsOnoff);
// STARTED SERVER

app.listen(process.env.PORT, () => {
  console.log("Server started");
});
