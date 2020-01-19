const mongoose = require("mongoose");

const Guest = mongoose.model("Guest", {
  name: String,
  username: String,
  presence: String,
  numberAdult: Number,
  numberChildren: Number
});

module.exports = Guest;
