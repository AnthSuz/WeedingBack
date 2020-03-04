const express = require("express");
const router = express.Router();

const SHA256 = require("crypto-js/sha256");
const encBase64 = require("crypto-js/enc-base64");

const UserCreated = require("../models/models_user");

router.post("/user/login", async (req, res) => {
  try {
    const user = await UserCreated.findOne({ email: req.fields.email });
    if (user) {
      if (
        SHA256(req.fields.password + user.salt).toString(encBase64) ===
        user.hash
      ) {
        return res.json({
          _id: user._id,
          token: user.token,
          username: user.username
        });
      } else {
        console.log(1);
        return res.status(401).json({ error: "Unauthorized" });
      }
    } else {
      console.log(2);
      return res.status(400).json("User not found");
    }
  } catch (e) {
    console.log(3);
    return res.status(400).json({ message: "An error occurred" });
  }
});

module.exports = router;
