const mongoose = require("mongoose");

const Children = mongoose.model("Children", {
  firstname: String,
  name: String
});

module.exports = Children;
