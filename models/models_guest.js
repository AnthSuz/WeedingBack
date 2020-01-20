const mongoose = require("mongoose");

const Guest = mongoose.model("Guest", {
  presence: String,
  firstname: String,
  name: String,
  numberPhone: String,
  numberAdult: Number,
  numberChildren: Number
});

module.exports = Guest;
