const express = require("express");
const router = express.Router();

const SHA256 = require("crypto-js/sha256");
const encBase64 = require("crypto-js/enc-base64");
const uid2 = require("uid2");

const User = require("../models/models_user");

router.post("/user/sign_up", async (req, res) => {
  const token = uid2(64);
  const salt = uid2(64);
  const hash = SHA256(req.fields.password + salt).toString(encBase64);

  try {
    const userExist = await User.findOne({ email: req.fields.email });
    console.log("email", req.fields.email);
    console.log("userExist", userExist);
    if (userExist) {
      res.json({
        message: "Email already used"
      });
    } else {
      const newUser = new User({
        email: req.fields.email,
        token: token,
        salt: salt,
        hash: hash,
        username: req.fields.username
      });
      await newUser.save();

      res.json({
        _id: newUser._id,
        token: newUser.token,
        email: newUser.email,
        username: newUser.username
      });
    }
  } catch (error) {
    console.log(error.message);
  }
});

module.exports = router;
