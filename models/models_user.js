const mongoose = require("mongoose");

const User = mongoose.model("User", {
  email: String,
  token: String,
  salt: String,
  hash: String,
  username: String
});

module.exports = User;
